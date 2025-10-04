package ua.deepsky.backend.feature.image;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ImageResponseDto {
    private UUID id;
    private String link;
    private String previewLink;
    private Date dateTaken;
    private String name;
    private String description;
}