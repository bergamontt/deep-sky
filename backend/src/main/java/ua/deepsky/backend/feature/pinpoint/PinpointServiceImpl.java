package ua.deepsky.backend.feature.pinpoint;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PinpointServiceImpl implements PinpointService {
    @Override
    public PinpointResponseDto getById(UUID id) {
        return null;
    }

    @Override
    public List<PinpointResponseDto> getAllOfCollection(UUID collectionId) {
        return List.of();
    }

    @Override
    public PinpointResponseDto create(PinpointRequestDto dto) {
        return null;
    }

    @Override
    public void delete(UUID id) {

    }
}
