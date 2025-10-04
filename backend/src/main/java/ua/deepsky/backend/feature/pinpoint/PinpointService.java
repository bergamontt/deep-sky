package ua.deepsky.backend.feature.pinpoint;


import java.util.List;
import java.util.UUID;

public interface PinpointService {
    PinpointResponseDto getById(UUID id);
    List<PinpointResponseDto> getAllOfCollection(UUID collectionId);
    PinpointResponseDto create(PinpointRequestDto dto);
    void delete(UUID id);
}