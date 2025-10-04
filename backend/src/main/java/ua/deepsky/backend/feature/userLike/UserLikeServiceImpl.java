package ua.deepsky.backend.feature.userLike;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserLikeServiceImpl implements UserLikeService {
    @Override
    public UserLikeResponseDto getById(UUID id) {
        return null;
    }

    @Override
    public List<UserLikeResponseDto> getOfCollection(UUID collectionId) {
        return List.of();
    }

    @Override
    public UserLikeResponseDto create(UserLikeRequestDto dto) {
        return null;
    }

    @Override
    public void delete(UUID id) {

    }
}
