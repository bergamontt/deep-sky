package ua.deepsky.backend.feature.appUser;

import org.springframework.stereotype.Component;

@Component
public class AppUserRequestMapper {
    public AppUser toEntity(AppUserRequestDto dto) {
        if (dto == null)
            return null;
        return AppUser.builder()
                .username(dto.getUsername())
                .passwordHash(dto.getPassword())
                .build();
    }
}
