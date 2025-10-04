package ua.deepsky.backend.feature.collection;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ua.deepsky.backend.feature.appUser.AppUserResponseDto;
import ua.deepsky.backend.feature.image.Image;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CollectionResponseDto {
    private UUID id;
    private AppUserResponseDto appUser;
    private Image image;
    private String name;
    private Boolean shared;
}