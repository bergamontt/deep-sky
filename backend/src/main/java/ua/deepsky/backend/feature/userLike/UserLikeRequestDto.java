package ua.deepsky.backend.feature.userLike;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserLikeRequestDto {
    @NotBlank
    private UUID appUserId;

    @NotBlank
    private UUID collectionId;
}