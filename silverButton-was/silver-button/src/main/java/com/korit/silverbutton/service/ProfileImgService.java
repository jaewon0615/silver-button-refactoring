package com.korit.silverbutton.service;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;

import com.korit.silverbutton.common.constant.ResponseMessage;
import com.korit.silverbutton.dto.ResponseDto;
import com.korit.silverbutton.repository.UserRepository;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProfileImgService {

    private final Storage storage;
    private final UserRepository userRepository;
    @Value("${user.dir}")
    private String rootPath;

    @Value("${spring.cloud.gcp.storage.bucket}")
    private String bucketName;

    public ProfileImgService(Storage storage, UserRepository userRepository) {
        this.storage = storage;
        this.userRepository = userRepository;
    }

    public String uploadFile(MultipartFile file) {
        if (file == null) {
            return null;
        }

        String newFileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();

        Path profileDir = Paths.get(rootPath, "profile");

        try {
            if (Files.notExists(profileDir)) {
                Files.createDirectories(profileDir);
            }
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        Path filePath = profileDir.resolve(newFileName);

        try {
            Files.write(filePath, file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }


        return Paths.get("profile", newFileName).toString();
    }

    public ResponseDto<List<String>> uploadFiles(List<MultipartFile> files) {
        List<String> uploadedFileUrls = new ArrayList<>();

        try {
            for (MultipartFile file : files) {
                String uuid = UUID.randomUUID().toString();
                String ext = file.getContentType();
                BlobInfo blobInfo = storage.create(
                        BlobInfo.newBuilder(bucketName, uuid)
                                .setContentType(ext)
                                .build(),
                        file.getInputStream()
                );

                String fileUrl = String.format("https://storage.googleapis.com/%s/%s", bucketName, uuid);
                uploadedFileUrls.add(fileUrl);
            }

            return ResponseDto.setSuccess("PROFILE_IMG_UPLOAD_SUCCESS", uploadedFileUrls);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseDto.setFailed("PROFILE_IMG_UPDATE_FAIL");
        }
    }

    private boolean deleteFileFromCloudStorage(String filePath) {
        try {
            String fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
            storage.delete(bucketName, fileName);
            System.out.println(ResponseMessage.FILE_DELETION_SUCCESS);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(ResponseMessage.FILE_DELETION_FAIL);
        }

        return false;
    }


    public boolean deleteFile(String filePath) {
        if (filePath.startsWith("https://storage.googleapis.com")) {
            return deleteFileFromCloudStorage(filePath);
        } else {
            Path pathToFile = Paths.get(filePath).normalize();
            if (!filePath.startsWith(rootPath)) {
                pathToFile = Paths.get(rootPath, filePath).normalize();
            }
            try {
                File file = pathToFile.toFile();
                if (file.exists() && file.delete()) {
                    System.out.println(ResponseMessage.FILE_DELETION_SUCCESS);
                    return true;
                } else {
                    System.out.println(ResponseMessage.FILE_NOT_FOUND + filePath);
                }
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println(ResponseMessage.FILE_DELETION_FAIL);
            }
        }

        return false;
    }

    public String getProfileImg(String fileName) {


        return Paths.get("profile", fileName).toString();
    }
}
