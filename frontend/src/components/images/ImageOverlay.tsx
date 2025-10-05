import { ActionIcon, Group, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Searchbar from "../common/Searchbar";
import Icon from "../common/Icon";
import home from '../../assets/home.svg'
import zoomIn from '../../assets/zoomIn.svg'
import zoomOut from '../../assets/zoomOut.svg'
import CollectionSelector from "../collection/CollectionSelector";
import { getCollectionsOfUser } from "../../services/collectionService";
import { useUserStore } from "../../hooks/userStore";
import useFetch from "../../hooks/useFetch";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Collection } from "../../models/Collection";
import type { ImageT } from "../../models/Image";
import type { PinpointDto } from "../../models/Pinpoint";
import { addPinpoint, getPinpointsOfCollection } from "../../services/pinpointService";
import { notifications } from "@mantine/notifications";
import pinpointIcon from "../../assets/pinpoint.svg";
import openEyeIcon from "../../assets/eye-open.svg";
import closedEyeIcon from "../../assets/eye-closed.svg";
import OpenSeadragon from "openseadragon";
import PinpointLayer from "./PinpointLayer";
import PinpointModal from "./PinpointModal";

type ImageOverlayProps = {
    viewer: OpenSeadragon.Viewer | null,
    image: ImageT
};

type ViewerPoint = { x: number; y: number };
type NormPoint = { x: number; y: number };

function ImageOverlay({ viewer, image }: ImageOverlayProps) {
    const navigate = useNavigate();
    const { user } = useUserStore();
    const { data: collections } = useFetch(getCollectionsOfUser, [user?.id])
    const [collection, setCollection] = useState<Collection | null>(null);

    const [adding, setAdding] = useState(false);
    const [viewing, setViewing] = useState(false);
    const { data: pinpoints } = useFetch(getPinpointsOfCollection, [collection?.id]);
    const [hoverPos, setHoverPos] = useState<{ viewer: ViewerPoint, norm: NormPoint } | null>(null);
    const pendingPosRef = useRef<NormPoint | null>(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [newName, setNewName] = useState("");

    const [, setTick] = useState(0);

    useEffect(() => {
        if (!viewer) return;
        const handler = () => setTick(n => n + 1);
        viewer.addHandler?.("animation", handler);
        viewer.addHandler?.("update-viewport", handler);
        viewer.addHandler?.("open", handler);
        viewer.addHandler?.("resize", handler);
        return () => {
            try {
                viewer.removeHandler?.("animation", handler);
                viewer.removeHandler?.("update-viewport", handler);
                viewer.removeHandler?.("open", handler);
                viewer.removeHandler?.("resize", handler);
            } catch (e) { }
        };
    }, [viewer]);

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

    const tiledImage = viewer?.world?.getItemAt(0);

    const onOverlayMouseMove = (e: React.MouseEvent) => {
        if (!adding || !viewer) return;

        const rect = viewer.container.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        if (!tiledImage) return;

        const imagePt = tiledImage.viewerElementToImageCoordinates(new OpenSeadragon.Point(px, py));
        const contentSize = tiledImage.getContentSize();
        if (!contentSize || contentSize.x === 0 || contentSize.y === 0) return;

        const normX = imagePt.x / contentSize.x;
        const normY = imagePt.y / contentSize.y;

        const viewerElPt = tiledImage.imageToViewerElementCoordinates(new OpenSeadragon.Point(imagePt.x, imagePt.y));

        setHoverPos({
            viewer: { x: viewerElPt.x, y: viewerElPt.y },
            norm: { x: Math.min(Math.max(normX, 0), 1), y: Math.min(Math.max(normY, 0), 1) }
        });
    };

    const onOverlayClick = () => {
        if (!adding || !viewer) return;
        if (!hoverPos) return;
        pendingPosRef.current = hoverPos.norm;
        setNewName("");
        setModalOpen(true);
    };

    const handleSavePinpoint = useCallback(async (name?: string) => {
        const pos = pendingPosRef.current;
        if (!pos) return;
        try {
            const dto: PinpointDto = {
                name: (name ?? newName) || "Untitled",
                description: "",
                x: pos.x,
                y: pos.y,
                collectionId: collection?.id ?? ""
            };
            await addPinpoint(dto);
            setModalOpen(false);
            setAdding(false);
            setHoverPos(null);
            notifications.show({
                title: 'Success!',
                message: `Pinpoint ${(name ?? newName) || "Untitled"} has been created.`,
                color: 'green',
                autoClose: 1000
            });
        } catch (err) {
            notifications.show({
                title: 'Error',
                message: 'Pinpoint creation failed.',
                color: 'red',
            });
        }
    }, [newName, collection]);

    const viewerRect = viewer?.container ? viewer.container.getBoundingClientRect() : null;

    return (
        <Stack pos="fixed" w="100%" style={{ zIndex: 1 }} p="1em">
            <Group pos="fixed" w="30%" style={{ zIndex: 2 }} gap="0.2em">
                <ActionIcon
                    size="lg" variant="default" aria-label="Return"
                    onClick={() => navigate(-1)}
                >
                    <Icon src={home} />
                </ActionIcon>
                <ActionIcon
                    size="lg" variant="default" aria-label="Zoom In"
                    onClick={handleZoomIn}
                >
                    <Icon src={zoomIn} />
                </ActionIcon>
                <ActionIcon
                    size="lg" variant="default" aria-label="Zoom Out"
                    onClick={handleZoomOut}
                >
                    <Icon src={zoomOut} />
                </ActionIcon>

                {collection &&
                    <ActionIcon
                        size="lg"
                        variant="default"
                        aria-label="Add Pinpoint"
                        onClick={() => {
                            setAdding(prev => !prev);
                            setHoverPos(null);
                            pendingPosRef.current = null;
                        }}
                    >
                        <Icon src={pinpointIcon} />
                    </ActionIcon>
                }

                {collection &&
                    <ActionIcon
                        size="lg"
                        variant="default"
                        aria-label="View Pinpoints"
                        onClick={() => {
                            setViewing(prev => !prev);
                            if (!viewing) setAdding(false);
                        }}
                    >
                        {viewing ? <Icon src={closedEyeIcon} /> : <Icon src={openEyeIcon} />}
                    </ActionIcon>
                }
            </Group>

            <Group
                justify="flex-end"
                pos="fixed" w="100%" pr="2em"
            >
                <Searchbar
                    width="35%"
                    glass placeholder="Search pinpoints or patterns"
                />
                <CollectionSelector
                    collections={collections ? collections : []}
                    setSelectedCollection={setCollection}
                    selected={collection}
                    image={image}
                />
            </Group>

            <PinpointLayer
                viewer={viewer}
                viewerRect={viewerRect}
                adding={adding}
                viewing={viewing}
                modalOpen={modalOpen}
                hoverPos={hoverPos}
                pinpoints={pinpoints ? pinpoints : []}
                onMouseMove={onOverlayMouseMove}
                onClick={onOverlayClick}
            />

            <PinpointModal
                opened={modalOpen}
                onClose={() => setModalOpen(false)}
                defaultName={newName}
                onSave={(name) => handleSavePinpoint(name)}
            />
        </Stack>
    );
}

export default ImageOverlay;
