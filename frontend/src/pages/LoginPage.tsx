import { Center, Fieldset, TextInput, PasswordInput } from "@mantine/core";
import { Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import GalaxyWrapper from "../components/common/GalaxyWrapper";
import AuthAnchor from "../styles/common/AuthAnchor";
import '../styles/pages/LoginPage.css'

function LoginPage() {
    const navigate = useNavigate();
    return(
        <GalaxyWrapper>
            <Center className="login-page-container">
                <Fieldset
                    radius="md" mt="md" p="2em"
                    bg='#242424' bd="1px solid #6F6F71"
                >
                    <Title order={2} c="white">
                        Deep Sky Account
                    </Title>
                    <Text size="sm" mt="xs" c="white" >
                        Log into your account to manage your patterns <br/> and saved points.
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
                        variant="white" size="md"
                        radius="xl" mt="xl" fullWidth c="black"
                        onClick={() => {navigate('/image')}}
                    >
                        Continue
                    </Button>
                    <Button
                        variant="outline" size="md" radius="xl"
                        mt="sm" color="white" fullWidth
                        onClick={() => {navigate('/')}}
                    >
                        Return
                    </Button>
                    <AuthAnchor
                        desc="New here?"
                        label="Create an account"
                        link="/signup"
                    />
                </Fieldset>
            </Center>
        </GalaxyWrapper>
    );
}

export default LoginPage