package ua.deepsky.backend.feature.userLike;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ua.deepsky.backend.feature.collection.CollectionResponseDto;
import ua.deepsky.backend.feature.appUser.AppUserResponseDto;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserLikeResponseDto {
    private UUID id;
    private AppUserResponseDto user;
    private CollectionResponseDto collection;
}