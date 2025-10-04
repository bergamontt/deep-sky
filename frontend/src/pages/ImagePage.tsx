import { useParams } from "react-router-dom";
import ImageViewer from "../components/common/ImageViewer";
import { Stack } from "@mantine/core";
import ImageOverlay from "../components/images/ImageOverlay";

function ImagePage() {
    const { id } = useParams();

    let src = 'dummy';
    if (id == "foo")
        src = '/storage/heic0707a/heic0707a.dzi'

    return(
        <Stack gap={0}>
            <ImageOverlay />
            <ImageViewer src={src} /> 
        </Stack>       
    );
}

export default ImagePage