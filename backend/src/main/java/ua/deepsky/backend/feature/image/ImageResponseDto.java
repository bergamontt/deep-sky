package ua.deepsky.backend.feature.image;

import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class ImageResponseDto {
    private UUID id;
    private String link;
    private String previewLink;
    private Date date;
    private String name;
    private String description;
}