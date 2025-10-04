package ua.deepsky.backend.feature.userLike;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user-like")
@RequiredArgsConstructor
public class UserLikeController {
    private final UserLikeService userLikeService;

    @GetMapping("/{id}")
    public UserLikeResponseDto getById(@PathVariable UUID id) {
        return userLikeService.getById(id);
    }

    @GetMapping("/collection/{collectionId}")
    public List<UserLikeResponseDto> getOfCollection(@PathVariable UUID collectionId) {
        return userLikeService.getOfCollection(collectionId);
    }

    @PostMapping
    public UserLikeResponseDto create(@Valid @RequestBody UserLikeRequestDto dto) {
        return userLikeService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        userLikeService.delete(id);
    }
}