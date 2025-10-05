package ua.deepsky.backend.security;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ua.deepsky.backend.feature.appUser.AppUser;
import ua.deepsky.backend.feature.appUser.AppUserRepository;

import java.util.Arrays;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthorizationService {
    private final AppUserRepository appUserRepository;

    public void checkAuthorized(AppUser account) {
        if (!isAuthorized(account)) {
            throw new AccessDeniedException(String.format(
                    "Access denied: tried to access account '%s' as '%s'!",
                    account != null ? account.getUsername() : null,
                    getCurrentUser().getUsername()
            ));
        }
    }

    public void checkAnyAuthorized(AppUser... accounts) {
        if (accounts == null || accounts.length == 0 || Arrays.stream(accounts).noneMatch(this::isAuthorized)) {
            throw new AccessDeniedException("Access denied: not authenticated as any of the required users!");
        }
    }

    public boolean isAuthorized(AppUser account) {
        AppUser currentUser = getCurrentUser();
        return account != null && currentUser != null && Objects.equals(account, currentUser);
    }

    public AppUser getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = (authentication != null) ? authentication.getName() : null;
        return appUserRepository.findByUsername(username).orElseThrow(() ->
                new EntityNotFoundException("User account with username " + username + " not found!"));
    }
}