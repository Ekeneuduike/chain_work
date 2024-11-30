package com.example.demo.dto;

import com.example.demo.dto.enums.UserRole;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AppInfo {
    private String user_id;
    private String full_name;
    private String email;
    private UserRole role;
    private byte[] image;
    private String image_type;
}
