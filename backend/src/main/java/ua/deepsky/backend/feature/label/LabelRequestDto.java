package ua.deepsky.backend.feature.label;

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
public class LabelRequestDto {
    @NotBlank
    private UUID patchId;

    @NotBlank
    private UUID collectionId;

    @NotBlank
    private String name;
}