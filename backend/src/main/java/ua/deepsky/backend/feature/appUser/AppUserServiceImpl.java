package ua.deepsky.backend.feature.appUser;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AppUserServiceImpl implements AppUserService {
    @Override
    public AppUserResponseDto getById(UUID id) {
        return null;
    }

    @Override
    public List<AppUserResponseDto> getAll() {
        return List.of();
    }

    @Override
    public AppUserResponseDto create(AppUserRequestDto dto) {
        return null;
    }

    @Override
    public void delete(UUID id) {

    }
}
