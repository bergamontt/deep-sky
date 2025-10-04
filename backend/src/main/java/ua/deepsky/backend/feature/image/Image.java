package ua.deepsky.backend.feature.image;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "Image")
public class Image {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false, length = 36)
    private UUID id;

    @NotBlank
    @Size(max = 255)
    @Column(name = "link", nullable = false, length = 255)
    private String link;

    @Size(max = 255)
    @Column(name = "preview_link", length = 255)
    private String previewLink;

    @PastOrPresent
    @Column(name = "date_taken")
    @Temporal(TemporalType.DATE)
    private Date dateTaken;

    @Size(max = 100)
    @Column(name = "name", length = 100)
    private String name;

    @Size(max = 500)
    @Column(name = "description", length = 500)
    private String description;
}
