package ua.deepsky.backend.feature.patch;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PatchServiceImpl implements PatchService {
    @Override
    public PatchResponseDto getById(String id) {
        return null;
    }

    @Override
    public List<PatchResponseDto> getByLabel(UUID collectionId, String label) {
        return List.of();
    }

    @Override
    public List<PatchResponseDto> getAllSimilarByLabel(UUID collectionId, String label) {
        return List.of();
    }

    @Override
    public List<PatchResponseDto> getAllSimilar(UUID patchId) {
        return List.of();
    }
}
