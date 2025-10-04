import React, { useRef, useEffect } from 'react';
import OpenSeadragon from 'openseadragon';

const ImageViewer: React.FC = () => {
    const viewerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!viewerRef.current) return;

        const viewer = OpenSeadragon({
            element: viewerRef.current,
            tileSources: '/storage/heic0506a/heic0506a.dzi', 
            zoomPerClick: 2,
            zoomPerScroll: 1.2, 
            gestureSettingsMouse: { scrollToZoom: true }, 
            maxZoomLevel: 28
        });

        return () => {
            viewer.destroy(); 
        };
        
  }, []);

    return <div ref={viewerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ImageViewer;