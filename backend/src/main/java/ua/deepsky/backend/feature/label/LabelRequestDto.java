package ua.deepsky.backend.feature.label;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.UUID;

@Data
public class LabelRequestDto {
    @NotBlank
    private UUID patchId;

    @NotBlank
    private UUID collectionId;

    @NotBlank
    private String name;
}