package com.example.demo.customerror;

public class AppError extends RuntimeException {

    public AppError(String message) {
        super(message);
    }

}
