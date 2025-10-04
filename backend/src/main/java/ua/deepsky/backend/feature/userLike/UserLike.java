package ua.deepsky.backend.feature.userLike;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;
import ua.deepsky.backend.feature.collection.Collection;
import ua.deepsky.backend.feature.appUser.AppUser;

import java.util.UUID;

@Entity
@Table(name = "UserLike")
public class UserLike {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "app_user_id", nullable = false)
    private AppUser appUser;

    @ManyToOne(optional = false)
    @JoinColumn(name = "collection_id", nullable = false)
    private Collection collection;
}
