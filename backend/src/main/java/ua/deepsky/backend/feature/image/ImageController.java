package ua.deepsky.backend.feature.image;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @GetMapping("/{id}")
    public ImageResponseDto getById(@PathVariable UUID id) {
        return imageService.getById(id);
    }

    @GetMapping
    public Page<ImageResponseDto> getAll(Pageable pageable) {
        return imageService.getAll(pageable);
    }

    @PostMapping
    public ImageResponseDto create(@Valid @RequestBody ImageRequestDto dto) {
        return imageService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        imageService.delete(id);
    }
}