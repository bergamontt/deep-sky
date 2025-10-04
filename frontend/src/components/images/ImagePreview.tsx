import { Stack, Image, Title, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type ImagePreviewProps = {
    preview: string
    id?: string
}

function ImagePreview({preview, id='foo'} : ImagePreviewProps) {
    const navigate = useNavigate();
    return(
        <Stack
            p="1em" bdrs="10px" maw="350px" gap="0.5em"
            bd='1px solid #444445ff' bg="#333333"
        >
            <Image
                src={preview} radius="md"
                onClick={() => {navigate('/image/' + id)}}
                h={300}
            />
            <Stack gap={0}>
                <Title order={3} c="white">
                    Carina Nebula
                </Title>
                <Text c="white">
                    Release: 24 April 2007, 15:00
                </Text>
            </Stack>
            <Text c="#c3c3c3ff">
                The fantasy-like landscape of the nebula is sculpted by the action
                of outflowing winds and scorching ultraviolet radiation from
                the monster stars that inhabit this inferno.
            </Text>
        </Stack>
    );
}

export default ImagePreview