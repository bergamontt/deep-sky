package ua.deepsky.backend.feature.appUser;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.*;

@Entity
@Table(name = "AppUser")
public class AppUser {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @NotBlank
    @Size(min = 3, max = 50)
    @Column(name = "username", nullable = false, unique = true, length = 50)
    private String username;

    @NotBlank
    @Column(name = "password_hash", nullable = false)
    private String passwordHash;
}