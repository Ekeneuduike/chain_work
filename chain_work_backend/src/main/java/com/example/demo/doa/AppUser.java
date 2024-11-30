package com.example.demo.doa;

import com.example.demo.dto.enums.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AppUser {
    @Id
    private String user_id;
    private String full_name;
    private String email;
    private UserRole role;
    private String profile_image;
    private String img_type;

}
