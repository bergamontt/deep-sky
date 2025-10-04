package ua.deepsky.backend.feature.patchCluster;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.UuidGenerator;
import ua.deepsky.backend.feature.image.Image;

import java.util.UUID;

@Entity
@Table(name = "PatchCluster")
public class PatchCluster {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "image_id", nullable = false)
    private Image image;

    @NotNull
    @Lob
    @Column(name = "centroid", nullable = false)
    private byte[] centroid;
}
