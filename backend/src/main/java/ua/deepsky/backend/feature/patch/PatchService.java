package ua.deepsky.backend.feature.patch;


import java.util.List;
import java.util.UUID;

public interface PatchService {
    PatchResponseDto getById(String id);
    List<PatchResponseDto> getByLabel(UUID collectionId, String label);
    List<PatchResponseDto> getAllSimilarByLabel(UUID collectionId, String label);
    List<PatchResponseDto> getAllSimilar(UUID patchId);
}