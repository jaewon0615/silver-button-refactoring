package com.korit.silverbutton.controller;

import com.korit.silverbutton.common.constant.ApiMappingPattern;

import com.korit.silverbutton.dto.message.request.MessageRequestDto;

import com.korit.silverbutton.dto.message.response.MessageResponseDto;
import com.korit.silverbutton.dto.ResponseDto;

import com.korit.silverbutton.principal.PrincipalUser;
import com.korit.silverbutton.service.MessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiMappingPattern.MESSAGE)
@RequiredArgsConstructor
public class MessageController {

    private static final String MESSAGE_GET = "/";
    private static final String MESSAGE_SENDER = "/sender";
    private static final String MESSAGE_RECEIVER = "/receive";
    private static final String MESSAGE_POST = "/";
    private static final String MESSAGE_DELETE = "{id}";
    private static final String MESSAGE_GET_ID = "{id}";



    private final MessageService messageService;
    private static final Logger log = LoggerFactory.getLogger(MessageController.class);

    @GetMapping(MESSAGE_GET)
    public ResponseEntity<ResponseDto<List<MessageResponseDto>>> getAllMessages(
            @AuthenticationPrincipal PrincipalUser principalUser
    )
    {
        {
            if (principalUser == null) {
                log.error("PrincipalUser is null. Authentication might have failed.");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }
        Long id = principalUser.getId();
        ResponseDto<List<MessageResponseDto>> response = messageService.getAllMessages(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MESSAGE_SENDER)
    public ResponseEntity<ResponseDto<List<MessageResponseDto>>> getOutGoingMessages(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        Long id = principalUser.getId();
        ResponseDto<List<MessageResponseDto>> response = messageService.getOutGoingMessages(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MESSAGE_RECEIVER)
    public ResponseEntity<ResponseDto<List<MessageResponseDto>>> getReceiveMessages(
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        Long id = principalUser.getId();
        ResponseDto<List<MessageResponseDto>> response = messageService.getReceiveMessages(id);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @PostMapping(MESSAGE_POST)
    public ResponseEntity<ResponseDto<MessageResponseDto>> createMessage(
            @Valid @RequestBody MessageRequestDto messageRequestDto,
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        Long senderId = principalUser.getId();
        ResponseDto<MessageResponseDto> response = messageService.createMessage(messageRequestDto, senderId);
        HttpStatus status = response.isResult() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        return ResponseEntity.status(status).body(response);
    }

    @DeleteMapping(MESSAGE_DELETE)
    public ResponseEntity<ResponseDto<Void>> deleteMessage(
            @PathVariable Long id,
            @AuthenticationPrincipal PrincipalUser principalUser
    ) {
        Long userId = principalUser.getId();

        ResponseDto<Void> response = messageService.deleteMessage(id, userId);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }

    @GetMapping(MESSAGE_GET_ID)
    public ResponseEntity<ResponseDto<MessageResponseDto>> getMessageById(
            @PathVariable Long id,
            @AuthenticationPrincipal PrincipalUser principalUser
    ){
        Long userId = principalUser.getId();

        ResponseDto<MessageResponseDto> response = messageService.getMessageById(id, userId);
        HttpStatus status = response.isResult() ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return ResponseEntity.status(status).body(response);
    }
}
