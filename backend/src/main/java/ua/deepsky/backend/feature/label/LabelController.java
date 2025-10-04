package ua.deepsky.backend.feature.label;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/label")
@RequiredArgsConstructor
public class LabelController {
    private final LabelService labelService;

    @GetMapping("/{id}")
    public LabelResponseDto getById(@PathVariable String id) {
        return labelService.getById(id);
    }

    @GetMapping("/collection/{collectionId}")
    public List<LabelResponseDto> getAllByCollection(@PathVariable UUID collectionId) {
        return labelService.getAllByCollection(collectionId);
    }

    @PostMapping
    public LabelResponseDto create(@Valid @RequestBody LabelRequestDto dto) {
        return labelService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        labelService.delete(id);
    }
}