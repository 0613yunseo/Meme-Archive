package com.meme.backend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Meme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String imageUrl;

    private int likes;
    private int views;

    private LocalDateTime createdAt = LocalDateTime.now();

    // ✅ 조회수 증가 전용 메서드
    public void increaseViews() {
        this.views += 1;
    }

    // (선택) 좋아요 증가
    public void increaseLikes() {
        this.likes += 1;
    }
}
