import { Center, Group, Stack, Title, Button, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import Galaxy  from "../components/backgrounds/Galaxy"
import '../styles/pages/WelcomePage.css'

function WelcomePage() {
    const navigate = useNavigate();
    return(
        <div
            style={{
                width: '100%',
                height: '100vh',
                background: 'black',
                position: 'fixed'
            }}
        >
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
                            variant="white" size="lg" radius="xl" color="black"
                            onClick={() => {navigate('/images')}}
                        >
                            Start
                        </Button>
                        <Button
                            variant="light" size="lg" radius="xl"  color="gray"
                            onClick={() => {navigate('/login')}}
                        >
                            Login
                        </Button>
                    </Group>
                </Stack>
            </Center>
            <Galaxy 
                mouseRepulsion={false}
                mouseInteraction={false}
                density={1}
                glowIntensity={0.3}
                saturation={0.5}
                hueShift={140}
            />
        </div>
    );
}

export default WelcomePage