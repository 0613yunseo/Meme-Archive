package com.meme.backend.service;

import com.meme.backend.domain.Meme;
import com.meme.backend.dto.ArchiveDetailResponse;
import com.meme.backend.repository.MemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArchiveDetailService {

    private final MemeRepository memeRepository;

    @Transactional
    public ArchiveDetailResponse getDetail(Long id) {

        // 1. Meme 조회
        Meme meme = memeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Meme not found"));

        // 2. 조회수 증가
        meme.increaseViews();

        // 3. 비슷한 밈 조회 (자기 자신 제외, 최신순 6개)
        List<Meme> similar = memeRepository
                .findByIdNot(
                        id,
                        PageRequest.of(
                                0,
                                6,
                                Sort.by(Sort.Direction.DESC, "createdAt")
                        )
                )
                .getContent();

        // 4. 응답 DTO 반환
        return new ArchiveDetailResponse(meme, similar);
    }
}
