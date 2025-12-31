package com.meme.backend.dto;

import com.meme.backend.domain.Meme;
import java.util.List;

public record ArchiveDetailResponse(
        Meme meme,
        List<Meme> similar
) {}
