@Entity
@Getter @Setter
public class Meme {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String imageUrl;

    private int likes;
    private int views;

    private LocalDateTime createdAt = LocalDateTime.now();
}
