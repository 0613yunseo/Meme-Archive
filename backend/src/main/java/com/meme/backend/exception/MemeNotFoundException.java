package com.meme.backend.exception;

public class MemeNotFoundException extends RuntimeException {

    public MemeNotFoundException(Long id) {
        super("Meme not found");   // 명세에 맞춘 메시지
    }
}
