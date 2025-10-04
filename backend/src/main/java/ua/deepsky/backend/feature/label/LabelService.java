package ua.deepsky.backend.feature.label;

import java.util.List;
import java.util.UUID;

public interface LabelService {
    LabelResponseDto getById(String id);
    List<LabelResponseDto> getAllByCollection(UUID collectionId);
    LabelResponseDto create(LabelRequestDto dto);
    void delete(UUID id);
}