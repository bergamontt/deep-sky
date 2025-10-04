import { Center, Fieldset, TextInput, PasswordInput, Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Galaxy from "../components/backgrounds/Galaxy";
import '../styles/pages/LoginPage.css'

function LoginPage() {
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
            <Center className="login-page-container">
                <Fieldset
                    radius="md" mt="md" p="2em"
                    bg='#242424' bd="1px solid #6F6F71"
                >
                    <Title order={2} c="white">
                        Deep Sky Account
                    </Title>
                    <Text size="sm" mt="xs" c="white" >
                        Log into your account to manage your patterns <br/> and points
                    </Text>
                    <TextInput 
                        label='Username'
                        placeholder='Your username'
                        size="md" mt="lg" radius="sm"
                        withAsterisk c="white"
                    />
                    <PasswordInput
                        label='Password'
                        placeholder='Your password'
                        mt="md" size="md" radius="sm"
                        withAsterisk c="white"
                    />
                    <Button
                        variant="outline" size="md"
                        radius="xl" mt="xl" c="white"
                        bd="1px solid #6F6F71" fullWidth
                        onClick={() => {navigate('/images')}}
                    >
                        Continue
                    </Button>
                </Fieldset>
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

export default LoginPage