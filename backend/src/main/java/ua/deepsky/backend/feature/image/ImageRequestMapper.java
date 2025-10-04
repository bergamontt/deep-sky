package ua.deepsky.backend.feature.image;

import org.mapstruct.Mapper;

@Mapper
public interface ImageRequestMapper {
    Image toEntity(ImageRequestDto dto);
}
