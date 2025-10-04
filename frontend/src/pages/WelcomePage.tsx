import { Center, Group, Stack, Title, Button, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import GalaxyWrapper from "../components/common/GalaxyWrapper";
import '../styles/pages/WelcomePage.css'

function WelcomePage() {
    const navigate = useNavigate();
    return(
        <GalaxyWrapper>
            <Center className="annotation-container">
                <Stack>
                    <Title size="2em" c="white">
                        Deep Sky
                    </Title>
                    <Text size="1em" fw="bold">
                        Bringing the universe down to Earth
                    </Text>
                    <Group grow pt="0.6em">
                        <Button
                            variant="white" size="lg" radius="sm" color="black"
                            onClick={() => {navigate('/image')}}
                        >
                            Start
                        </Button>
                        <Button
                            variant="outline" size="lg" radius="sm" color="white"
                            onClick={() => {navigate('/login')}}
                        >
                            Login
                        </Button>
                    </Group>
                </Stack>
            </Center>
        </GalaxyWrapper>
    );
}

export default WelcomePage