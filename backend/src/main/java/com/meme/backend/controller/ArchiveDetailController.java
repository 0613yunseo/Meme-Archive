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
