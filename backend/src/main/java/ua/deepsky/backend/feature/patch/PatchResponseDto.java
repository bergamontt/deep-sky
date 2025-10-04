package ua.deepsky.backend.feature.patch;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PatchResponseDto {
    private UUID id;
    private Integer height;
    private Integer width;
    private Double x;
    private Double y;
}