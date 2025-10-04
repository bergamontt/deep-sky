package ua.deepsky.backend.feature.image;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService{
    private final ImageRepository imageRepository;
    private final ImageRequestMapper imageRequestMapper;
    private final ImageResponseMapper imageResponseMapper;

    @Override
    public ImageResponseDto getById(UUID id) {
        return imageResponseMapper.toDto(imageRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Image not found")));
    }

    @Override
    public Page<ImageResponseDto> getAll(Pageable pageable) {
        return imageRepository.findAll(pageable).map(imageResponseMapper::toDto);
    }

    @Override
    public ImageResponseDto create(ImageRequestDto dto) {
        return imageResponseMapper.toDto(imageRepository.save(imageRequestMapper.toEntity(dto)));
    }

    @Override
    public void delete(UUID id) {
        if (imageRepository.existsById(id)) {
            imageRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Image not found");
        }
    }
}
