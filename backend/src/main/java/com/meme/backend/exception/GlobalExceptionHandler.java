package com.meme.backend.exception;

import com.meme.backend.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // MemeNotFoundException → 404 + 공통 응답 형식
    @ExceptionHandler(MemeNotFoundException.class)
    public ResponseEntity<ApiResponse<?>> handleMemeNotFound(MemeNotFoundException e) {
        ApiResponse<?> body = new ApiResponse<>(null, e.getMessage());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }
}
