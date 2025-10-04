import { Button, Center, Fieldset, PasswordInput, Text, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import GalaxyWrapper from "../components/common/GalaxyWrapper";
import '../styles/pages/SigninPage.css'
import AuthAnchor from "../styles/common/AuthAnchor";

function SignupPage() {
    const navigate = useNavigate();
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