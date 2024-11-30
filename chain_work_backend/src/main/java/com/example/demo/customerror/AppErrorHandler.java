package com.example.demo.customerror;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class AppErrorHandler {

    @ExceptionHandler(AppError.class)
    public ResponseEntity<?> handleCustomException(AppError ex, WebRequest request) {
        ErrorDetails errorDetails = ErrorDetails.builder()
                .message(ex.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
    // Handle other exceptions//
     @ExceptionHandler(AuthError.class)
     public ResponseEntity<?> handleGlobalException(Exception ex, WebRequest request) {
         ErrorDetails errorDetails = ErrorDetails.builder()
                 .message(ex.getMessage())
                 .timestamp(LocalDateTime.now())
                 .build();
         return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
    }
}
