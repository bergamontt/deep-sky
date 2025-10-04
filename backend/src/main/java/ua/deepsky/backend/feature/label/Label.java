package ua.deepsky.backend.feature.label;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.UuidGenerator;
import ua.deepsky.backend.feature.collection.Collection;
import ua.deepsky.backend.feature.patch.Patch;

import java.util.UUID;

@Entity
@Table(name = "Label")
public class Label {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "patch_id", nullable = false)
    private Patch patch;

    @ManyToOne(optional = false)
    @JoinColumn(name = "collection_id", nullable = false)
    private Collection collection;

    @NotBlank
    @Size(max = 100)
    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Lob
    @Column(name = "embedding")
    private byte[] embedding;
}
