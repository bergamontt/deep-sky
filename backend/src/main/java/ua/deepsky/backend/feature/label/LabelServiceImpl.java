package ua.deepsky.backend.feature.label;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class LabelServiceImpl implements LabelService {
    @Override
    public LabelResponseDto getById(String id) {
        return null;
    }

    @Override
    public List<LabelResponseDto> getAllByCollection(UUID collectionId) {
        return List.of();
    }

    @Override
    public LabelResponseDto create(LabelRequestDto dto) {
        return null;
    }

    @Override
    public void delete(UUID id) {

    }
}
