package com.meme.backend.service;

import com.meme.backend.domain.Meme;
import com.meme.backend.repository.MemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArchiveDetailService {

    private final MemeRepository memeRepository;

    public Meme getDetail(Long id) {
        return memeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Meme not found: " + id));
    }
}
