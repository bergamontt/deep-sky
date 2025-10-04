import { Flex } from "@mantine/core";
import ImagePreview from "./ImagePreview";

function ImagePreviews() {
    return(
        <Flex p="1em" bdrs="10px" bg='#242424' h="100%">
            <ImagePreview
                preview="/preview/heic0707a.jpg"
                id='foo'
            />
        </Flex>
    );
}

export default ImagePreviews