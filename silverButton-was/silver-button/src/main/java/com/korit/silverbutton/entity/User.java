package com.korit.silverbutton.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Past;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name = "users")
@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String userId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 50)
    private String nickname;

    @Past
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    @Column(nullable = false)
    private Date birthDate;

    @Column(columnDefinition = "ENUM('M', 'F')")
    private String gender;

    @Column(nullable = false)
    private String profileImage;

    @Column(columnDefinition = "ENUM('노인', '보호자', '요양사')")
    private String role;

    private String licenseNumber;

    private String specialization;

    private Long protectorId;

    public void setProfileImg(String filePath) {
    }

    public String getProfileImg() {
        return null;
    }
}