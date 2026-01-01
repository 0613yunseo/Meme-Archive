package com.meme.backend.controller;

import com.meme.backend.dto.ApiResponse;
import com.meme.backend.service.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/community")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;

    // 좋아요 순 TOP 5
    @GetMapping("/top")
    public ApiResponse<?> getTopList() {
        return new ApiResponse<>(communityService.getTopList(), "success");
    }

    // 좋아요 증가
    @PostMapping("/meme/{id}/like")
    public ApiResponse<?> like(@PathVariable Long id) {
        return new ApiResponse<>(communityService.increaseLike(id), "success");
    }
}
