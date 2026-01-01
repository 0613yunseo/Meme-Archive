package com.meme.backend.service;

import com.meme.backend.domain.Meme;
import com.meme.backend.dto.ArchiveDetailResponse;
import com.meme.backend.repository.MemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArchiveDetailService {

    private final MemeRepository memeRepository;

    public ArchiveDetailResponse getArchiveDetail(Long id) {
        Meme meme = memeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Meme not found"));
        return new ArchiveDetailResponse(meme);
    }
}
