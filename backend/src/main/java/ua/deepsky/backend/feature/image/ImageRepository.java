package ua.deepsky.backend.feature.image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ImageRepository extends JpaRepository<Image, UUID>, CrudRepository<Image, UUID> {
}
