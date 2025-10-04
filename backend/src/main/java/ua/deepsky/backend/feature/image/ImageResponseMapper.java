package ua.deepsky.backend.feature.image;

import org.mapstruct.Mapper;

@Mapper
public interface ImageResponseMapper {
    ImageResponseDto toDto(Image image);
}
