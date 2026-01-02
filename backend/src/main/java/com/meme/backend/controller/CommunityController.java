package com.meme.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meme.backend.dto.ApiResponse;
import com.meme.backend.service.CommunityService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/community")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;

    /**
     * ⭐ 인기 밈 Top 5
     * GET /api/community/top
     */
    @GetMapping("/top")
    public ApiResponse<?> getTopList() {
        // ✅ message 먼저, data 나중
        return new ApiResponse<>("success", communityService.getTopList());
    }

    /**
     * ❤️ 좋아요 +1 (중복 허용)
     * POST /api/community/meme/{id}/like
     */
    @PostMapping("/meme/{id}/like")
    public ApiResponse<?> like(@PathVariable Long id) {
        // ✅ message 먼저, data 나중
        return new ApiResponse<>("success", communityService.increaseLike(id));
    }
}
