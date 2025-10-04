package ua.deepsky.backend.feature.pinpoint;

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
public class PinpointRequestDto {
    @NotBlank
    private UUID collectionId;

    private String name;

    private String description;

    @NotNull
    private Double x;

    @NotNull
    private Double y;
}