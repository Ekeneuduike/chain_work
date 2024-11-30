package com.example.demo.customerror;

public class AuthError extends RuntimeException {
    public AuthError(String message) {
        super(message);
    }
}
