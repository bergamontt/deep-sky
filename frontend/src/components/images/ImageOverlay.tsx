import { ActionIcon, Group, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Icon from "../common/Icon";
import home from '../../assets/home.svg'
import Searchbar from "../common/Searchbar";

function ImageOverlay() {
    const navigate = useNavigate();
    return(
        <Stack pos="fixed" w="100%" style={{zIndex: 1}}>
            <Group pos="fixed" w="100%" p="1em" style={{zIndex: 2}}>
                <ActionIcon
                    size="lg" variant="default" aria-label="Return"
                    onClick={() => navigate(-1)}
                >
                    <Icon src={home}/>
                </ActionIcon>
            </Group>
            <Group 
                justify="flex-end"
                pos="fixed" w="100%" p="1em"
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