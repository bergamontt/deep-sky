package ua.deepsky.backend.feature.pinpoint;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.UuidGenerator;
import ua.deepsky.backend.feature.collection.Collection;

import java.util.UUID;

@Entity
@Table(name = "Pinpoint")
public class Pinpoint {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "collection_id", nullable = false)
    private Collection collection;

    @Size(max = 100)
    @Column(name = "name", length = 100)
    private String name;

    @Size(max = 500)
    @Column(name = "description", length = 500)
    private String description;

    @NotNull
    @Column(name = "x", nullable = false)
    private Double x;

    @NotNull
    @Column(name = "y", nullable = false)
    private Double y;
}
