package com.meme.backend.repository;


import com.meme.backend.domain.Meme;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemeRepository extends JpaRepository<Meme, Long> {

    List<Meme> findAllByOrderByCreatedAtDesc();
    List<Meme> findAllByOrderByLikesDesc();

    Page<Meme> findByIdNot(Long id, Pageable pageable);
}