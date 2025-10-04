package ua.deepsky.backend.feature.image;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ImageServiceImpl implements ImageService{
    @Override
    public ImageResponseDto getById(UUID id) {
        return null;
    }

    @Override
    public Page<ImageResponseDto> getAll(Pageable pageable) {
        return null;
    }

    @Override
    public ImageResponseDto create(ImageRequestDto dto) {
        return null;
    }

    @Override
    public void delete(UUID id) {

    }
}
