package ua.deepsky.backend.feature.collection;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CollectionServiceImpl implements CollectionService {
    private final CollectionRepository collectionRepository;
    private final CollectionRequestMapper collectionRequestMapper;
    private final CollectionResponseMapper collectionResponseMapper;

    @Override
    public CollectionResponseDto getById(UUID id) {
        return collectionResponseMapper.toDto(collectionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Collection not found")));
    }

    @Override
    public Page<CollectionResponseDto> getAllPublic(Pageable pageable) {
        return collectionRepository.findBySharedTrue(pageable).map(collectionResponseMapper::toDto);
    }

    @Override
    public List<CollectionResponseDto> getAllOfUser(UUID userId) {
        return collectionRepository.findByAppUserId(userId).stream()
                .map(collectionResponseMapper::toDto)
                .toList();
    }

    @Override
    public CollectionResponseDto create(CollectionRequestDto dto) {
        return collectionResponseMapper.toDto(
                collectionRepository.save(collectionRequestMapper.toEntity(dto)));
    }

    @Override
    public void delete(UUID id) {
        if(collectionRepository.existsById(id)) {
            collectionRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Collection not found");
        }
    }
}
