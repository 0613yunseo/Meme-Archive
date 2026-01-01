package com.meme.backend.controller;

import com.meme.backend.dto.ApiResponse;
import com.meme.backend.dto.HomeResponseDto;
import com.meme.backend.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class HomeController {

    private final HomeService homeService;

    @GetMapping("/home")
    public ApiResponse<HomeResponseDto> home() {
        HomeResponseDto data = homeService.getHomeData();
        return new ApiResponse<>("success", data);
    }
}
