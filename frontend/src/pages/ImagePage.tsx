import { useParams } from "react-router-dom";
import ImageViewer from "../components/common/ImageViewer";
import { Stack } from "@mantine/core";
import ImageOverlay from "../components/images/ImageOverlay";
import { getImage } from "../services/ImageService";
import useFetch from "../hooks/useFetch";

function ImagePage() {
    const { id } = useParams();
    const {data : image} = useFetch(
        getImage, [id],
    );
    if (!image)
        return <></>;
    return(
        <Stack gap={0}>
            <ImageOverlay />
            <ImageViewer src={image.link} /> 
        </Stack>       
    );
}

export default ImagePage