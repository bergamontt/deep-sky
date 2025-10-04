package ua.deepsky.backend.feature.pinpoint;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/pinpoint")
@RequiredArgsConstructor
public class PinpointController {
    private final PinpointService pinpointService;

    @GetMapping("/{id}")
    public PinpointResponseDto getById(@PathVariable UUID id) {
        return pinpointService.getById(id);
    }

    @GetMapping("/collection/{collectionId}")
    public List<PinpointResponseDto> getAllOfCollection(@PathVariable UUID collectionId) {
        return pinpointService.getAllOfCollection(collectionId);
    }

    @PostMapping
    public PinpointResponseDto create(@Valid @RequestBody PinpointRequestDto dto) {
        return pinpointService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        pinpointService.delete(id);
    }
}