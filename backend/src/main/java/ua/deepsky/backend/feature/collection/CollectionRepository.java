package ua.deepsky.backend.feature.collection;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CollectionRepository extends JpaRepository<Collection, UUID>, CrudRepository<Collection, UUID> {
    Page<Collection> findBySharedTrue(Pageable pageable);
}
