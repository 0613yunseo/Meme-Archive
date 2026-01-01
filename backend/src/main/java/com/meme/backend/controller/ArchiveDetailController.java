package com.meme.backend.controller;

import com.meme.backend.dto.ApiResponse;
import com.meme.backend.dto.ArchiveDetailResponse;
import com.meme.backend.service.ArchiveDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/archive")
@RequiredArgsConstructor
public class ArchiveDetailController {

    private final ArchiveDetailService archiveDetailService;

    @GetMapping("/{id}")
    public ApiResponse<ArchiveDetailResponse> getArchiveDetail(@PathVariable Long id) {
        ArchiveDetailResponse data = archiveDetailService.getArchiveDetail(id);
        return new ApiResponse<>("success", data);
    }
}
