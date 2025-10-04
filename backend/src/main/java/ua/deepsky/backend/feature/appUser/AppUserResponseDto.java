package ua.deepsky.backend.feature.appUser;

import lombok.Data;

import java.util.UUID;

@Data
public class AppUserResponseDto {
    private UUID id;
    private String username;
}