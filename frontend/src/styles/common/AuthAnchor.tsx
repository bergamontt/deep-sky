import { Center, Text, Anchor } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type AuthAnchorProps = {
    desc: string,
    label: string,
    link: string
};

function AuthAnchor({desc, label, link} : AuthAnchorProps) {
    const navigate = useNavigate();
    return(
        <Center mt="xs">
            <Text c="white">
                {desc} &nbsp;
                <Anchor
                    onClick={() => {navigate(link)}}
                >
                    {label}
                </Anchor>
            </Text>
        </Center>
    );
}

export default AuthAnchor