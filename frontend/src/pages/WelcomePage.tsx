import { Center, Group, Stack, Title, Button } from "@mantine/core";
import Galaxy  from "../components/backgrounds/Galaxy"
import '../styles/pages/WelcomePage.css'

function WelcomePage() {
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
                    Bringing the universe <br /> down to Earth
                    <Group grow pt="0.6em">
                        <Button variant="white" size="lg" radius="xl" color="black">
                            Start
                        </Button>
                        <Button variant="light" size="lg" radius="xl"  color="gray">
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