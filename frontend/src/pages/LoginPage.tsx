import { Center, Fieldset, TextInput, PasswordInput } from "@mantine/core";
import { Title, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import GalaxyWrapper from "../components/common/GalaxyWrapper";
import AuthAnchor from "../styles/common/AuthAnchor";
import { useCallback, useState } from "react";
import { notifications } from "@mantine/notifications";
import { login } from "../services/authService";
import '../styles/pages/LoginPage.css'
import { useAuthStore } from "../hooks/authStore";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useAuthStore();

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

    const handleLogin = useCallback(async () => {
        if (!validateInput()) return;
        try {
            const response = await login({ username, password });
            setToken(response.token);
            notifications.show({
                title: 'Success!',
                message: 'You have successfully logged in.',
                color: 'green',
                autoClose: 1000,
                onClose: () => navigate('/image'),
            });
        } catch (err) {
            notifications.show({
                title: 'Error',
                message: 'Login failed. Check your username or password.',
                color: 'red',
            });
        }
    }, [username, password]);

    return (
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
                        Log into your account to manage your patterns <br /> and saved points.
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
                        onClick={handleLogin}
                    >
                        Continue
                    </Button>
                    <Button
                        variant="outline" size="md" radius="xl"
                        mt="sm" color="white" fullWidth
                        onClick={() => { navigate('/') }}
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