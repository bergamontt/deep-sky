package ua.deepsky.backend.feature.collection;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.deepsky.backend.feature.appUser.AppUserRepository;
import ua.deepsky.backend.feature.image.ImageRepository;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class CollectionRequestMapper {
    private final AppUserRepository appUserRepository;
    private final ImageRepository imageRepository;

    public Collection toEntity(CollectionRequestDto dto) {
        if (dto == null)
            return null;
        Collection collection = Collection.builder()
                .name(dto.getName())
                .shared(dto.getShared())
                .build();

        UUID imageId = dto.getImageId();
        if (imageId != null) {
            collection.setImage(imageRepository.findById(imageId).orElseThrow(
                    () -> new EntityNotFoundException("Image not found")));
        }
        UUID userId = dto.getAppUserId();
        if (userId != null) {
            collection.setAppUser(appUserRepository.findById(userId).orElseThrow(
                    () -> new EntityNotFoundException("User not found")));
        }
        return collection;
    }
}
