package com.meme.backend.dto;

import com.meme.backend.domain.Meme;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class HomeResponseDto {

    private Meme todayMeme;
    private List<Meme> popular;
    private List<Meme> latest;

}
