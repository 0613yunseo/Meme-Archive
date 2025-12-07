@Getter @Setter @AllArgsConstructor
public class ApiResponse<T> {
    private T data;
    private String message;
}
