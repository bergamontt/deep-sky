package ua.deepsky.backend.feature.patch;

import lombok.Data;

import java.util.UUID;

@Data
public class PatchResponseDto {
    private UUID id;
    private Integer height;
    private Integer width;
    private Double x;
    private Double y;
}