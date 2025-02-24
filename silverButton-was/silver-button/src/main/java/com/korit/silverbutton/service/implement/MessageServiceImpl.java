package com.korit.silverbutton.service.implement;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.Message.Request.MessageRequestDto;
import com.korit.silverbutton.dto.Message.Response.MessageResponseDto;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.entity.Message;
import com.korit.silverbutton.entity.User;
import com.korit.silverbutton.repository.MessageRepository;
import com.korit.silverbutton.repository.UserRepository;
import com.korit.silverbutton.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;

    @Override
    public ResponseDto<List<MessageResponseDto>> getAllMessages(Long id) {

        try{
            List<Message> messages = messageRepository.findMessageById(id);
            if (messages.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_POST);

            }
            List<MessageResponseDto> messageDtos = messages.stream()
                    .map(MessageResponseDto::new)
                    .collect(Collectors.toList());

            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, messageDtos);

        }catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<MessageResponseDto> createMessage(MessageRequestDto dto, Long senderId) {
        MessageResponseDto data = null;

        String title = dto.getTitle();
        String content = dto.getContent();

        try{
            User sender = userRepository.findById(senderId)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid sender ID"));
            User receiver = userRepository.findByUserId(dto.getReceiverUserId())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid receiver ID"));
            Message message = Message.builder()
                    .title(title)
                    .content(content)
                    .sender(sender)
                    .receiver(receiver)
                    .build();

            messageRepository.save(message);

            data = new MessageResponseDto(message);

        } catch (Exception e){
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);

        }

        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);
    }

    @Override
    public ResponseDto<List<MessageResponseDto>> getOutGoingMessages(Long senderId) {
        User sender = new User();
        sender.setId(senderId);
        try {
            List<Message> messages = messageRepository.findAllBySenderOrderByCreatedAtDesc(sender);
            if (messages.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_POST);
            }

            List<MessageResponseDto> messageDtos = messages.stream()
                    .map(MessageResponseDto::new)
                    .collect(Collectors.toList());

            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, messageDtos);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }

    }

    @Override
    public ResponseDto<List<MessageResponseDto>> getReceiveMessages(Long receiverId) {
        User receiver = new User();
        receiver.setId(receiverId);
        try {
            List<Message> messages = messageRepository.findAllByReceiverOrderByCreatedAtDesc(receiver);
            if (messages.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_POST);
            }

            List<MessageResponseDto> messageDtos = messages.stream()
                    .map(MessageResponseDto::new)
                    .collect(Collectors.toList());

            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, messageDtos);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    @Override
    public ResponseDto<Void> deleteMessage(Long id, Long userId) {
        try {
            Optional<Message> optionalMessage = messageRepository.findById(id);
            if (optionalMessage.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_POST);
            }

            Message message = optionalMessage.get();

            boolean isAuthorized = message.getSender().getId().equals(userId)
                    || message.getReceiver().getId().equals(userId);

            if (!isAuthorized) {
                return ResponseDto.setFailed(ResponseMessage.UNAUTHORIZED);
            }

            messageRepository.delete(message);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
        return ResponseDto.setSuccess(ResponseMessage.SUCCESS, null);
    }

    @Override
    public ResponseDto<MessageResponseDto> getMessageById(Long messageId, Long userId) {
        try{
            Optional<Message> optionalMessage = messageRepository.findById(messageId);
            if (optionalMessage.isEmpty()) {
                return ResponseDto.setFailed(ResponseMessage.NOT_EXIST_POST);

            }
            Message message = optionalMessage.get();
            if (!message.getSender().getId().equals(userId) && !message.getReceiver().getId().equals(userId)) {
                return ResponseDto.setFailed(ResponseMessage.UNAUTHORIZED);
            }

            MessageResponseDto data = new MessageResponseDto(message);
            return ResponseDto.setSuccess(ResponseMessage.SUCCESS, data);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed(ResponseMessage.DATABASE_ERROR);
        }
    }

    }




