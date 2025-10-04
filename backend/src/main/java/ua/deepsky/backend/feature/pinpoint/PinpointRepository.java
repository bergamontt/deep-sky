package ua.deepsky.backend.feature.pinpoint;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PinpointRepository extends JpaRepository<Pinpoint, UUID> {
    List<Pinpoint> findAllByCollectionId(UUID id);
}
