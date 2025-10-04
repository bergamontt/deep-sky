package ua.deepsky.backend.feature.label;

import lombok.Data;
import ua.deepsky.backend.feature.collection.CollectionResponseDto;
import ua.deepsky.backend.feature.patch.PatchResponseDto;

import java.util.UUID;

@Data
public class LabelResponseDto {
    private UUID id;
    private PatchResponseDto patch;
    private CollectionResponseDto collection;
    private String name;
}