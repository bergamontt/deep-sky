package ua.deepsky.backend.feature.userLike;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.UUID;

@Data
public class UserLikeRequestDto {
    @NotBlank
    private UUID userId;

    @NotBlank
    private UUID collectionId;
}