import { Tooltip } from "@mantine/core";
import OpenSeadragon from "openseadragon";
import type { Pinpoint } from "../../models/Pinpoint";

type ViewerPoint = { x: number; y: number };
type NormPoint = { x: number; y: number };

type PinpointLayerProps = {
    viewer: OpenSeadragon.Viewer | null,
    viewerRect: DOMRect | null,
    adding: boolean,
    viewing: boolean,
    modalOpen: boolean,
    hoverPos: { viewer: ViewerPoint, norm: NormPoint } | null,
    pinpoints?: Pinpoint[],
    onMouseMove?: (e: React.MouseEvent) => void,
    onClick?: (e: React.MouseEvent) => void
};

function PinpointLayer({ viewer, viewerRect, adding, viewing, modalOpen, hoverPos, pinpoints, onMouseMove, onClick }: PinpointLayerProps) {
    const tiledImage = viewer?.world?.getItemAt(0);
    if (!viewerRect || (!adding && !viewing)) return null;
    return (
        <div
            style={{
                position: "fixed",
                left: viewerRect.left,
                top: viewerRect.top,
                width: viewerRect.width,
                height: viewerRect.height,
                pointerEvents: modalOpen ? "none" : (adding ? "auto" : "none"),
                zIndex: 1000,
                cursor: adding ? "crosshair" : "default",
            }}
            onMouseMove={adding ? onMouseMove : undefined}
            onClick={adding ? onClick : undefined}
        >
            {adding && hoverPos && (
                <div
                    style={{
                        position: "absolute",
                        left: hoverPos.viewer.x,
                        top: hoverPos.viewer.y,
                        transform: "translate(-50%, -50%)",
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "red",
                        boxShadow: "0 0 6px rgba(255,0,0,0.8)",
                        pointerEvents: "none",
                    }}
                />
            )}

            {viewing && pinpoints && (() => {
                if (!tiledImage) return null;
                const contentSize = tiledImage.getContentSize();
                if (!contentSize || contentSize.x === 0 || contentSize.y === 0) return null;
                return pinpoints.map((p, idx) => {
                    const imagePt = new OpenSeadragon.Point(p.x * contentSize.x, p.y * contentSize.y);
                    const viewerElPt = tiledImage.imageToViewerElementCoordinates(imagePt);
                    return (
                        <Tooltip key={idx} label={p.name}>
                            <div
                                style={{
                                    position: "absolute",
                                    left: viewerElPt.x,
                                    top: viewerElPt.y,
                                    transform: "translate(-50%, -50%)",
                                    width: 12,
                                    height: 12,
                                    borderRadius: "50%",
                                    background: "red",
                                    border: "2px solid white",
                                    cursor: "pointer",
                                    pointerEvents: "auto",
                                    zIndex: 1001,
                                }}
                                title={p.name}
                            />
                        </Tooltip>
                    );
                });
            })()}
        </div>
    );
}

export default PinpointLayer;