package com.meme.backend.dto;

import com.meme.backend.domain.Meme;
import lombok.Getter;

@Getter
public class ArchiveDetailResponse {

    private final Long id;
    private final String imageUrl;
    private final int likes;

    public ArchiveDetailResponse(Meme meme) {
        this.id = meme.getId();
        this.imageUrl = meme.getImageUrl();
        this.likes = meme.getLikes();
    }
}
