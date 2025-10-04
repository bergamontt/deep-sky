package ua.deepsky.backend.feature.image;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Date;

@Data
public class ImageRequestDto {
    @NotBlank
    private String link;

    private String previewLink;

    private Date date;

    private String name;

    private String description;
}