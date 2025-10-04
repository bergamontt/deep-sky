package ua.deepsky.backend.feature.patch;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/patch")
@RequiredArgsConstructor
public class PatchController {
    private final PatchService patchService;

    @GetMapping("/{id}")
    public PatchResponseDto getById(@PathVariable String id) {
        return patchService.getById(id);
    }

    @GetMapping("/collection/{collectionId}/label/{label}")
    public List<PatchResponseDto> getByLabel(@PathVariable UUID collectionId, @PathVariable String label) {
        return patchService.getByLabel(collectionId, label);
    }

    @GetMapping("/collection/{collectionId}/label/{label}/similar")
    public List<PatchResponseDto> getAllSimilarByLabel(@PathVariable UUID collectionId, @PathVariable String label) {
        return patchService.getAllSimilarByLabel(collectionId, label);
    }

    @GetMapping("/{patchId}/similar")
    public List<PatchResponseDto> getAllSimilar(@PathVariable UUID patchId) {
        return patchService.getAllSimilar(patchId);
    }
}