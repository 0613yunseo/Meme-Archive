package com.example.demo.archive;

import com.example.demo.meme.Meme;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/archive")
public class ArchiveController {

    private final ArchiveService archiveService;

    public ArchiveController(ArchiveService archiveService) {
        this.archiveService = archiveService;
    }
    
    @GetMapping
    public ResponseEntity<?> getArchive(
            @RequestParam(defaultValue = "latest") String sort
    ) {
        List<Meme> result = archiveService.getArchive(sort);

        return ResponseEntity.ok(
                Map.of(
                        "message", "success",
                        "data", result
                )
        );
    }
}
