package ua.deepsky.backend.feature.userLike;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.deepsky.backend.feature.appUser.AppUserRepository;
import ua.deepsky.backend.feature.collection.CollectionRepository;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class UserLikeRequestMapper {
    private final AppUserRepository appUserRepository;
    private final CollectionRepository collectionRepository;

    public UserLike toEntity(UserLikeRequestDto dto) {
        if (dto == null)
            return null;
        UserLike userLike = new UserLike();
        UUID userId = dto.getAppUserId();
        if(userId != null){
            userLike.setAppUser(appUserRepository.findById(userId)
                    .orElseThrow(() -> new EntityNotFoundException("User not found")));
        }
        UUID collectionId = dto.getCollectionId();
        if(collectionId != null){
            userLike.setCollection(collectionRepository.findById(collectionId)
                    .orElseThrow(() -> new EntityNotFoundException("Collection not found")));
        }
        return userLike;
    }
}
