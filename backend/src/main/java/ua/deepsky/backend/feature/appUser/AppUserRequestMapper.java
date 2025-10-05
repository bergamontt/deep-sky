package ua.deepsky.backend.feature.appUser;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AppUserRequestMapper {
    private final PasswordEncoder passwordEncoder;

    public AppUser toEntity(AppUserRequestDto dto) {
        if (dto == null)
            return null;
        return AppUser.builder()
                .username(dto.getUsername())
                .passwordHash(passwordEncoder.encode(dto.getPassword()))
                .build();
    }
}
