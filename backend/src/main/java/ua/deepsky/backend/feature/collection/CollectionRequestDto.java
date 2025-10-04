package ua.deepsky.backend.feature.collection;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class CollectionRequestDto {
    @NotBlank
    private UUID userId;

    @NotBlank
    private UUID imageId;

    @NotNull
    private String name;

    @NotNull
    private Boolean shared;
}