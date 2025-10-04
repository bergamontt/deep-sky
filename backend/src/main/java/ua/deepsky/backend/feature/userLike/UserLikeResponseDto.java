package ua.deepsky.backend.feature.userLike;

import lombok.Data;
import ua.deepsky.backend.feature.collection.CollectionResponseDto;
import ua.deepsky.backend.feature.appUser.AppUserResponseDto;

import java.util.UUID;

@Data
public class UserLikeResponseDto {
    private UUID id;
    private AppUserResponseDto user;
    private CollectionResponseDto collection;
}