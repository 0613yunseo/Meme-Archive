@Service
@RequiredArgsConstructor
public class ArchiveDetailService {

    private final MemeRepository memeRepository;

    public Meme getDetail(Long id) {
        return memeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Meme not found: " + id));
    }
}
