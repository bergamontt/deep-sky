package ua.deepsky.backend.feature.appUser;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class AppUserController {
    private final AppUserService appUserService;

    @GetMapping("/{id}")
    public AppUserResponseDto getById(@PathVariable UUID id) {
        return appUserService.getById(id);
    }

    @GetMapping("/username/{username}")
    public AppUserResponseDto getByUsername(@PathVariable String username) {
        return appUserService.getByUsername(username);
    }

    @GetMapping
    public List<AppUserResponseDto> getAll() {
        return appUserService.getAll();
    }

    @PostMapping
    public AppUserResponseDto create(@Valid @RequestBody AppUserRequestDto dto) {
        return appUserService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        appUserService.delete(id);
    }
}