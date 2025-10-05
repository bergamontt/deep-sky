import { useParams } from "react-router-dom";
import ImageViewer from "../components/common/ImageViewer";
import { Stack } from "@mantine/core";
import ImageOverlay from "../components/images/ImageOverlay";
import { getImage } from "../services/ImageService";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

function ImagePage() {
    const { id } = useParams();
    const {data : image} = useFetch(getImage, [id],);
    const [viewer, setViewer] = useState<OpenSeadragon.Viewer | null>(null);
    if (!image)
        return <></>;
    return(
        <Stack gap={0}>
            <ImageOverlay viewer={viewer} />
            <ImageViewer src={image.link} setViewer={setViewer} /> 
        </Stack>       
    );
}

export default ImagePage