package ua.deepsky.backend.feature.image;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ImageRequestDto {
    @NotBlank
    private String link;

    private String previewLink;

    private Date dateTaken;

    private String name;

    private String description;
}