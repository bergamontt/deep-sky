package ua.deepsky.backend.feature.label;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ua.deepsky.backend.feature.collection.CollectionResponseDto;
import ua.deepsky.backend.feature.patch.PatchResponseDto;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LabelResponseDto {
    private UUID id;
    private PatchResponseDto patch;
    private CollectionResponseDto collection;
    private String name;
}