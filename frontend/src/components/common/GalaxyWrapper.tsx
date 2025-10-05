import { memo, useMemo, type ReactNode } from "react";
import Galaxy from "../backgrounds/Galaxy";

type PageWrapperProps = {
    children?: ReactNode;
};


const GalaxyWrapper = memo(({ children }: PageWrapperProps) => {
    const galaxy = useMemo(() => (
        <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={1}
            glowIntensity={0.3}
            saturation={0.5}
            hueShift={140}
        />
    ), []);
    return(
        <div
            style={{
                width: '100%',
                height: '100vh',
                background: 'black',
                position: 'fixed'
            }}
        >
            {children}
            {galaxy}
        </div>
    );
});

export default GalaxyWrapper