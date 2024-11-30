package com.example.demo.dto;

import com.example.demo.dto.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppDto {
    private String user_id;
    private String full_name;
    private String email;
    private UserRole role;
}
