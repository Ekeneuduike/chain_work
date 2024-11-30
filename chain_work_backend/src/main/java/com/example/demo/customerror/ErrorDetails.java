package com.example.demo.customerror;

import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatusCode;

import java.time.LocalDateTime;

@Data
@Builder
public class ErrorDetails {
    private LocalDateTime timestamp;
    private String message;
}
