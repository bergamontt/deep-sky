package ua.deepsky.backend.feature.pinpoint;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ua.deepsky.backend.feature.collection.CollectionResponseDto;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PinpointResponseDto {
    private UUID id;
    private CollectionResponseDto collection;
    private String name;
    private String description;
    private Double x;
    private Double y;
}