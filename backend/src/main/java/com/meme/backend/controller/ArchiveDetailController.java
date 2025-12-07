package com.meme.backend.controller;

import com.meme.backend.dto.ApiResponse;
import com.meme.backend.service.ArchiveDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/archive")
@RequiredArgsConstructor
public class ArchiveDetailController {

    private final ArchiveDetailService archiveDetailService;

    @GetMapping("/{id}")
    public ApiResponse<?> getDetail(@PathVariable Long id) {
        return new ApiResponse<>(archiveDetailService.getDetail(id), "success");
    }
}
