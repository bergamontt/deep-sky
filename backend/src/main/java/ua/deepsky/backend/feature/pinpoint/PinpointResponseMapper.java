package ua.deepsky.backend.feature.pinpoint;

import org.mapstruct.Mapper;

@Mapper
public interface PinpointResponseMapper {
    PinpointResponseDto toDto(Pinpoint pinpoint);
}
