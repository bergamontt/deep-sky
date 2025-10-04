import { Flex } from "@mantine/core";
import ImagePreview from "./ImagePreview";

function ImagePreviews() {
    return(
        <Flex p="1em" bdrs="10px" bg='#242424' h="100%">
            <ImagePreview
                preview="/preview/heic0707a.jpg"
                id='/storage/heic0707a/heic0707a.dzi'
            />
        </Flex>
    );
}

export default ImagePreviews