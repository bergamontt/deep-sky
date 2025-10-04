package ua.deepsky.backend.feature.patch;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.hibernate.annotations.UuidGenerator;
import ua.deepsky.backend.feature.patchCluster.PatchCluster;

import java.util.UUID;

@Entity
@Table(name = "Patch")
public class Patch {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "patchcluster_id", nullable = false)
    private PatchCluster patchCluster;

    @NotNull
    @Positive
    @Column(name = "height", nullable = false)
    private Integer height;

    @NotNull
    @Positive
    @Column(name = "width", nullable = false)
    private Integer width;

    @NotNull
    @Column(name = "x", nullable = false)
    private Double x;

    @NotNull
    @Column(name = "y", nullable = false)
    private Double y;

    @NotNull
    @Lob
    @Column(name = "embedding", nullable = false)
    private byte[] embedding;
}
