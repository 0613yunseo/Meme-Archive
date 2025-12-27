package com.meme.backend.dto;

import com.meme.backend.domain.Meme;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class HomeResponseDto {
    private Meme todayMeme;
    private List<Meme> popular;
    private List<Meme> latest;
}
