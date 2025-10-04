package ua.deepsky.backend.feature.collection;

import lombok.Data;
import ua.deepsky.backend.feature.appUser.AppUserResponseDto;
import ua.deepsky.backend.feature.image.Image;

import java.util.UUID;

@Data
public class CollectionResponseDto {
    private UUID id;
    private AppUserResponseDto user;
    private Image image;
    private String name;
    private Boolean shared;
}