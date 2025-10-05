import { Button, Center, Fieldset, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import GalaxyWrapper from "../components/common/GalaxyWrapper";
import '../styles/pages/SigninPage.css'
import AuthAnchor from "../styles/common/AuthAnchor";
import { useCallback, useState } from "react";
import { notifications } from "@mantine/notifications";
import { register } from "../services/authService";

function SignupPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateInput = useCallback(() => {
        if (username.length < 5) {
            notifications.show({
                title: 'Error',
                message: 'Username must be at least 5 characters long',
                color: 'red',
            });
            return false;
        }
        if (password.length < 7) {
            notifications.show({
                title: 'Error',
                message: 'Password must be at least 7 characters long',
                color: 'red',
            });
            return false;
        }
        return true;
    }, [username, password]);

    const handleRegister = useCallback(async () => {
        if (!validateInput()) return;
        try {
            const response = await register({ username, password });
            localStorage.setItem('token', response.token);
            notifications.show({
                title: 'Success!',
                message: 'Your account has been created.',
                color: 'green',
                autoClose: 1000,
                onClose: () => navigate('/image'),
            });
        } catch (err) {
            notifications.show({
                title: 'Error',
                message: 'Registration failed. Username may be taken.',
                color: 'red',
            });
        }
    }, [username, password]);

    return(
        <GalaxyWrapper>
            <Center className="sign-page-container">
                <Fieldset
                    radius="md" mt="md" p="2em"
                    bg='#242424' bd="1px solid #6F6F71"
                >
                    <Title order={2} c="white">
                        Deep Sky Account
                    </Title>
                    <Text size="sm" mt="xs" c="white" >
                        Create an account to manage your patterns
                        &nbsp; &nbsp; &nbsp;
                        <br/> and saved points.
                    </Text>
                    <TextInput 
                        label='Username'
                        placeholder='Your username'
                        size="md" mt="lg" radius="sm"
                        withAsterisk c="white"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <PasswordInput
                        label='Password'
                        placeholder='Your password'
                        mt="md" size="md" radius="sm"
                        withAsterisk c="white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="white" size="md"
                        radius="xl" mt="xl" fullWidth c="black"
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Button
                        variant="outline" size="md" radius="xl"
                        mt="sm" color="white" fullWidth
                        onClick={() => {navigate('/')}}
                    >
                        Return
                    </Button>
                    <AuthAnchor
                        desc="Already have an account?"
                        label="Log in"
                        link="/login"
                    />
                </Fieldset>
            </Center>
        </GalaxyWrapper>
    );
}

export default SignupPage