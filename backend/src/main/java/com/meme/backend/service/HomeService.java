package com.meme.backend.service;

import com.meme.backend.domain.Meme;
import com.meme.backend.dto.HomeResponseDto;
import com.meme.backend.repository.MemeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeService {

    private final MemeRepository memeRepository;

    public HomeResponseDto getHomeData() {

        List<Meme> popular = memeRepository.findTop3ByOrderByLikesDesc();
        List<Meme> latest = memeRepository.findTop6ByOrderByCreatedAtDesc();

        // todayMeme = 최신 중 하나 선택
        Meme today = latest.isEmpty() ? null : latest.get(0);

        return HomeResponseDto.builder()
                .todayMeme(today)
                .popular(popular)
                .latest(latest)
                .build();
    }
}
