import React, { useRef, useEffect } from 'react';
import OpenSeadragon from 'openseadragon';

type ImageViewerProps = {
    src: string
};

const ImageViewer: React.FC<ImageViewerProps> = ({src}) => {
    const viewerRef = useRef<HTMLDivElement | null>(null);
    const viewerInstance = useRef<OpenSeadragon.Viewer | null>(null);

    useEffect(() => {
        if (!viewerRef.current) return;

        const viewer = OpenSeadragon({
            element: viewerRef.current,
            tileSources: src, 
            zoomPerClick: 2,
            zoomPerScroll: 1.2,
            showNavigationControl: false,
            showNavigator: false,
            gestureSettingsMouse: { scrollToZoom: true }, 
            maxZoomLevel: 24
        });
        
        viewerInstance.current = viewer;

        return () => {
            viewer.destroy(); 
        };
        
    }, []);

    useEffect(() => {
        if (viewerInstance.current)
            viewerInstance.current.open(src);
    }, [src]);

    return(
        <div
            ref={viewerRef}
            style={{
                width: '100vw',
                height: '100vh',
                background: 'black'
            }}
        />
    );
};

export default ImageViewer;