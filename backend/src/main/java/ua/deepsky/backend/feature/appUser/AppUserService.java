package ua.deepsky.backend.feature.appUser;

import java.util.List;
import java.util.UUID;

public interface AppUserService {
    AppUserResponseDto getById(UUID id);
    List<AppUserResponseDto> getAll();
    AppUserResponseDto create(AppUserRequestDto dto);
    void delete(UUID id);
}