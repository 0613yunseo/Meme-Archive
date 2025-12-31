package com.example.demo.meme;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MemeRepository extends JpaRepository<Meme, Long> {

    List<Meme> findTop18ByOrderByLikeCountDesc();

    List<Meme> findTop18ByOrderByCreatedAtDesc();
}
