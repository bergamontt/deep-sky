package ua.deepsky.backend.feature.collection;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/collection")
@RequiredArgsConstructor
public class CollectionController {
    private final CollectionService collectionService;

    @GetMapping("/{id}")
    public CollectionResponseDto getById(@PathVariable UUID id) {
        return collectionService.getById(id);
    }

    @GetMapping("/public")
    public Page<CollectionResponseDto> getAllPublic(Pageable pageable) {
        return collectionService.getAllPublic(pageable);
    }

    @GetMapping("/user/{userId}")
    public Page<CollectionResponseDto> getAllOfUser(@PathVariable UUID userId, Pageable pageable) {
        return collectionService.getAllOfUser(userId, pageable);
    }

    @PostMapping
    public CollectionResponseDto create(@Valid @RequestBody CollectionRequestDto dto) {
        return collectionService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        collectionService.delete(id);
    }
}