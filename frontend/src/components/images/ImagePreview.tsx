import { Stack, Image, Title, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import type { ImageT } from "../../models/Image";

type ImagePreviewProps = {
    image: ImageT;
}

function ImagePreview({image} : ImagePreviewProps) {
    const navigate = useNavigate();
    return(
        <Stack
            p="1em" bdrs="10px" maw="350px" gap="0.5em"
            bd='1px solid #444445ff' bg="#333333"
        >
            <Image
                src={image?.previewLink} radius="md"
                onClick={() => {navigate('/image/' + image?.id)}}
                h={300}
            />
            <Stack gap={0}>
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