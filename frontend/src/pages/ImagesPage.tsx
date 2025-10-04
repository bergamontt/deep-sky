import { Title, Text, Stack } from "@mantine/core";
import PageWrapper from "../components/common/PageWrapper";
import ImagePreviews from "../components/images/ImagePreviews";

function ImagesPage() {
    return(
        <PageWrapper color='#111111ff'>
           <Stack gap="0.2em">
                <Title c="white">
                    Available Images
                </Title>
                <Text c='#c4c0c0ff'>
                    Browse hundreds of beautiful high-quality nebula images
                </Text>
           </Stack>
            <ImagePreviews />
        </PageWrapper>
    );
}

export default ImagesPage