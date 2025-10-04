import { Center, Fieldset, TextInput, PasswordInput, Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import GalaxyWrapper from "../components/common/GalaxyWrapper";
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
                        variant="white" size="md"
                        radius="xl" mt="xl" fullWidth c="black"
                        onClick={() => {navigate('/images')}}
                    >
                        Continue
                    </Button>
                    <Button
                        variant="outline" size="md" radius="xl"
                        mt="md" color="white" fullWidth
                        onClick={() => {navigate('/')}}
                    >
                        Return
                    </Button>
                </Fieldset>
            </Center>
        </GalaxyWrapper>
    );
}

export default LoginPage