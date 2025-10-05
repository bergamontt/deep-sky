package ua.deepsky.backend.feature.appUser;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AppUserServiceImpl implements AppUserService {
    private final AppUserRepository appUserRepository;
    private final AppUserRequestMapper appUserRequestMapper;
    private final AppUserResponseMapper appUserResponseMapper;

    @Override
    public AppUserResponseDto getById(UUID id) {
        return appUserResponseMapper.toDto(appUserRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found")));
    }

    @Override
    public AppUserResponseDto getByUsername(String username) {
        return appUserResponseMapper.toDto(appUserRepository.findByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found")));
    }

    @Override
    public List<AppUserResponseDto> getAll() {
        return appUserRepository.findAll().stream()
                .map(appUserResponseMapper::toDto)
                .toList();
    }

    @Override
    public AppUserResponseDto create(AppUserRequestDto dto) {
        return appUserResponseMapper.toDto(appUserRepository.save(appUserRequestMapper.toEntity(dto)));
    }

    @Override
    public void delete(UUID id) {
        if (appUserRepository.existsById(id)) {
            appUserRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("User not found");
        }
    }
}
