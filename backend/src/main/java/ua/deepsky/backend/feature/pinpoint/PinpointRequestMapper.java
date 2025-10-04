package ua.deepsky.backend.feature.pinpoint;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.deepsky.backend.feature.collection.CollectionRepository;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class PinpointRequestMapper {
    private final CollectionRepository collectionRepository;

    public Pinpoint toEntity(PinpointRequestDto dto){
        if(dto == null)
            return null;
        Pinpoint pinpoint = Pinpoint.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .x(dto.getX())
                .y(dto.getY())
                .build();
        UUID collectionId = dto.getCollectionId();
        if(collectionId != null){
            pinpoint.setCollection(collectionRepository.findById(collectionId)
                    .orElseThrow(() -> new EntityNotFoundException("Collection not found")));
        }
        return pinpoint;
    }
}
