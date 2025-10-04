package ua.deepsky.backend.feature.collection;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CollectionServiceImpl implements CollectionService {
    @Override
    public CollectionResponseDto getById(UUID id) {
        return null;
    }

    @Override
    public Page<CollectionResponseDto> getAllPublic(Pageable pageable) {
        return null;
    }

    @Override
    public Page<CollectionResponseDto> getAllOfUser(UUID userId, Pageable pageable) {
        return null;
    }

    @Override
    public CollectionResponseDto create(CollectionRequestDto dto) {
        return null;
    }

    @Override
    public void delete(UUID id) {

    }
}
