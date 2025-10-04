package ua.deepsky.backend.feature.pinpoint;

import lombok.Data;
import ua.deepsky.backend.feature.collection.CollectionResponseDto;

import java.util.UUID;

@Data
public class PinpointResponseDto {
    private UUID id;
    private CollectionResponseDto collection;
    private String name;
    private String description;
    private Double x;
    private Double y;
}