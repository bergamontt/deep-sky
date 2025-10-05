import { ActionIcon, Group, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Searchbar from "../common/Searchbar";
import Icon from "../common/Icon";
import home from '../../assets/home.svg'
import zoomIn from '../../assets/zoomIn.svg'
import zoomOut from '../../assets/zoomOut.svg'

type ImageOverlayProps = {
    viewer: OpenSeadragon.Viewer | null
};

function ImageOverlay({ viewer } : ImageOverlayProps) {
    const navigate = useNavigate();
    const handleZoomIn = () => {
        if (viewer?.viewport) {
            const currentZoom = viewer.viewport.getZoom();
            const maxZoom = viewer.viewport.getMaxZoom();
            if (currentZoom < maxZoom)
                viewer.viewport.zoomBy(2);
        }
    };
    const handleZoomOut = () => {
        if (viewer?.viewport) {
            const currentZoom = viewer.viewport.getZoom();
            const minZoom = viewer.viewport.getMinZoom();
            if (currentZoom > minZoom)
                viewer.viewport.zoomBy(0.5);
        }
    };
    return(
        <Stack pos="fixed" w="100%" style={{zIndex: 1}} p="1em">
            <Group pos="fixed" w="30%" style={{zIndex: 2}} gap="0.2em">
                <ActionIcon
                    size="lg" variant="default" aria-label="Return"
                    onClick={() => navigate(-1)}
                >
                    <Icon src={home}/>
                </ActionIcon>
                <ActionIcon
                    size="lg" variant="default" aria-label="Zoom In"
                    onClick={handleZoomIn}
                >
                    <Icon src={zoomIn}/>
                </ActionIcon>
                <ActionIcon
                    size="lg" variant="default" aria-label="Zoom Out"
                    onClick={handleZoomOut}
                >
                    <Icon src={zoomOut}/>
                </ActionIcon>
            </Group>
            <Group 
                justify="flex-end"
                pos="fixed" w="100%" pr="2em"
            >
                <Searchbar
                    width="35%"
                    glass placeholder="Search pinpoints or patterns"
                />
            </Group>
        </Stack>
    );
}

export default ImageOverlay