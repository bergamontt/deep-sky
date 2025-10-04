package ua.deepsky.backend.feature.appUser;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AppUserRequestDto {
    @NotBlank
    @Size(min = 3, max = 50)
    private String username;

    @NotBlank
    private String password;
}