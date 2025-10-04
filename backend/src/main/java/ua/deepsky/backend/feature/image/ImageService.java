package ua.deepsky.backend.feature.image;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface ImageService {
    ImageResponseDto getById(UUID id);
    Page<ImageResponseDto> getAll(Pageable pageable);
    ImageResponseDto create(ImageRequestDto dto);
    void delete(UUID id);
}