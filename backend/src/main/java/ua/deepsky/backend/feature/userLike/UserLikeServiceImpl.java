package ua.deepsky.backend.feature.userLike;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserLikeServiceImpl implements UserLikeService {
    private final UserLikeRepository userLikeRepository;
    private final UserLikeResponseMapper userLikeResponseMapper;
    private final UserLikeRequestMapper userLikeRequestMapper;

    @Override
    public UserLikeResponseDto getById(UUID id) {
        return userLikeResponseMapper.toDto(userLikeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User like not found")));
    }

    @Override
    public List<UserLikeResponseDto> getOfCollection(UUID collectionId) {
        return userLikeRepository.findByCollectionId(collectionId).stream()
                .map(userLikeResponseMapper::toDto)
                .toList();
    }

    @Override
    public UserLikeResponseDto create(UserLikeRequestDto dto) {
        if(userLikeRepository.existsByAppUserIdAndCollectionId(dto.getAppUserId(), dto.getCollectionId())) {
            throw new EntityExistsException("User like already exists");
        }
        return userLikeResponseMapper.toDto(userLikeRepository.save(userLikeRequestMapper.toEntity(dto)));
    }

    @Override
    public void delete(UUID id) {
        if (userLikeRepository.existsById(id)) {
            userLikeRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("User like not found");
        }
    }
}
