package ua.deepsky.backend.feature.appUser;

import org.mapstruct.Mapper;

@Mapper
public interface AppUserResponseMapper {
    AppUserResponseDto toDto(AppUser user);
}
