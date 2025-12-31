package com.meme.backend.repository;

import com.meme.backend.domain.Meme;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemeRepository extends JpaRepository<Meme, Long> {

    // 좋아요 순 TOP 3
    List<Meme> findTop3ByOrderByLikesDesc();

    // 최신순 TOP 6
    List<Meme> findTop6ByOrderByCreatedAtDesc();
}
