import { Title, Text, Stack, Pagination, Flex, Center, ActionIcon, Menu } from "@mantine/core";
import PageWrapper from "../components/common/PageWrapper";
import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getImages } from "../services/ImageService";
import ImagePreview from "../components/images/ImagePreview";
import Icon from "../components/common/Icon";
import userProfile from '../assets/userProfile.svg'
import logout from '../assets/logout.svg'
import login from '../assets/login.svg'
import { useAuthStore } from "../hooks/authStore";
import { useNavigate } from "react-router-dom";

function ImagesPage() {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);
    const { isAuthenticated, removeToken, currentUsername } = useAuthStore();
    const params = useMemo(() => ({ page: page - 1 }), [page]);
    const {data : pages} = useFetch(getImages, [params],);

    const handleLogout = () => {
        removeToken();
        navigate('/');
    };
    const handleLogin = () => {
        navigate("/login");
    }
    return(
        <PageWrapper color='#111111ff'>
            <Flex justify="space-between">
                <Stack gap="0.2em">
                    <Title c="white">
                        Available Images
                    </Title>
                    <Text c='#c4c0c0ff'>
                        Browse hundreds of beautiful high-quality nebula images
                    </Text>
                </Stack>
                <Menu shadow="md">
                    <Menu.Target>
                        <ActionIcon variant="transparent" aria-label="Settings" size="2.4em">
                            <Icon src={userProfile} size="1.8em"/>
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>
                            {isAuthenticated && currentUsername ? currentUsername : "Guest"}
                        </Menu.Label>
                        {isAuthenticated ? (
                            <Menu.Item
                                leftSection={<Icon src={logout} size="0.7em"/>}
                                onClick={handleLogout}
                            >
                                Log out
                            </Menu.Item>
                        ) : (
                            <Menu.Item
                                leftSection={<Icon src={login} size="0.8em"/>}
                                onClick={handleLogin}
                            >
                                Log in
                            </Menu.Item>
                        )}
                    </Menu.Dropdown>
                </Menu>
            </Flex>
            <Flex
                p="1em" bdrs="10px" h="100%" wrap="wrap"
                gap="md" justify="center" bg='#242424'
            >
                {pages &&
                    pages.content.map((image) => (
                        <ImagePreview
                            image={image} key={image.id}
                        />
                    ))}
            </Flex>
            <Center>
                <Pagination
                    total={pages?.page.totalPages || 1}
                    value={page}
                    onChange={setPage}
                    color="gray"
                />
            </Center>
        </PageWrapper>
    );
}

export default ImagesPage