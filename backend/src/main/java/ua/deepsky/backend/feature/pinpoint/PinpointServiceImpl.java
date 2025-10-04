package ua.deepsky.backend.feature.pinpoint;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PinpointServiceImpl implements PinpointService {
    private final PinpointResponseMapper pinpointResponseMapper;
    private final PinpointRepository pinpointRepository;
    private final PinpointRequestMapper pinpointRequestMapper;

    @Override
    public PinpointResponseDto getById(UUID id) {
        return pinpointResponseMapper.toDto(pinpointRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Pinpoint not found")));
    }

    @Override
    public List<PinpointResponseDto> getAllOfCollection(UUID collectionId) {
        return pinpointRepository.findAllByCollectionId(collectionId).stream()
                .map(pinpointResponseMapper::toDto)
                .toList();
    }

    @Override
    public PinpointResponseDto create(PinpointRequestDto dto) {
        return pinpointResponseMapper.toDto(
                pinpointRepository.save(pinpointRequestMapper.toEntity(dto)));
    }

    @Override
    public void delete(UUID id) {
        if(pinpointRepository.existsById(id)) {
            pinpointRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Pinpoint not found");
        }
    }
}
