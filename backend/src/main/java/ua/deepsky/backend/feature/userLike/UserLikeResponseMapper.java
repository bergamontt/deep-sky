package ua.deepsky.backend.feature.userLike;

import org.mapstruct.Mapper;

@Mapper
public interface UserLikeResponseMapper {
    UserLikeResponseDto toDto(UserLike userLike);
}
