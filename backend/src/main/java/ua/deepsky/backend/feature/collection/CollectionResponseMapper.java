package ua.deepsky.backend.feature.collection;

import org.mapstruct.Mapper;

@Mapper
public interface CollectionResponseMapper {
    CollectionResponseDto toDto(Collection collection);
}
