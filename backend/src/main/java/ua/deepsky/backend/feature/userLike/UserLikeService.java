package ua.deepsky.backend.feature.userLike;

import java.util.List;
import java.util.UUID;

public interface UserLikeService {
    UserLikeResponseDto getById(UUID id);
    List<UserLikeResponseDto> getOfCollection(UUID collectionId);
    UserLikeResponseDto create(UserLikeRequestDto dto);
    void delete(UUID id);
}