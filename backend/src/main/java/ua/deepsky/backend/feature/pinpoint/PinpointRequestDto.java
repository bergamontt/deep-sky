package ua.deepsky.backend.feature.pinpoint;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
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