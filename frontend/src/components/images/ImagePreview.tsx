import { Stack, Image, Title, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import type { ImageT } from "../../models/Image";
import '../../styles/images/ImagePreview.css'

type ImagePreviewProps = {
    image: ImageT;
}

function ImagePreview({image} : ImagePreviewProps) {
    const navigate = useNavigate();
    return(
        <Stack
            p="1em" bdrs="10px" maw="350px" gap="0.5em"
            bd='1px solid #444445ff' bg="#333333"
            align="center" className="image-preview-container"
        >
            <Image
                src={image?.previewLink} radius="md"
                mih={300} miw={300} className="image-preview"
                onClick={() => navigate(`/image/${image?.id}`)}
            />
            <Stack gap={0} align="flex-start" w="100%">
                <Title order={3} c="white">
                    {image?.name}
                </Title>
                <Text c="white">
                    Release: {image?.dateTaken.toString()}
                </Text>
            </Stack>
            <Text c="#c3c3c3ff">
                {image?.description}
            </Text>
        </Stack>
    );
}

export default ImagePreview