package ua.deepsky.backend.feature.label;

import org.mapstruct.Mapper;

@Mapper
public interface LabelResponseMapper {
    LabelResponseDto toDto(Label label);
}
