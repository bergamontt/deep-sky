package ua.deepsky.backend.feature.collection;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CollectionRequestDto {
    @NotNull
    private UUID appUserId;

    @NotNull
    private UUID imageId;

    @NotNull
    private String name;

    @NotNull
    private Boolean shared;
}