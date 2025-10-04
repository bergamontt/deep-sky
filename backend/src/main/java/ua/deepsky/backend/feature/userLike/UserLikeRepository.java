package ua.deepsky.backend.feature.userLike;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface UserLikeRepository extends JpaRepository<UserLike, UUID> {
    boolean existsByAppUserIdAndCollectionId(UUID appUserId, UUID collectionId);
    List<UserLike> findByCollectionId(UUID collectionId);
}
