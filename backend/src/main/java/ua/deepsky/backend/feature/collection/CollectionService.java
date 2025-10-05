package ua.deepsky.backend.feature.collection;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

public interface CollectionService {
    CollectionResponseDto getById(UUID id);
    Page<CollectionResponseDto> getAllPublic(Pageable pageable);
    List<CollectionResponseDto> getAllOfUser(UUID userId);
    CollectionResponseDto create(CollectionRequestDto dto);
    void delete(UUID id);
}