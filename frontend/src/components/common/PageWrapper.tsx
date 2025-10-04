import { Center, Stack } from "@mantine/core";
import type { ReactNode } from "react";

type PageWrapperProps = {
    color?: string,
    children?: ReactNode
};

function PageWrapper({color="white", children} : PageWrapperProps) {
    return (
        <Center
            w="100%" mih='100vh' bg={color}
        >
            <Stack
                w='1200px' pt="3em" mih='100vh'
                pl="1em" pr="1em" pb="1em"
            >
                {children}
            </Stack>
        </Center>
    );
}

export default PageWrapper