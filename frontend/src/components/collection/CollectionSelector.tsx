import { Menu, Button, Group, Text, Badge, ScrollArea } from '@mantine/core';
import checkIcon from '../../assets/check.svg';
import chevronDown from '../../assets/chevron-down.svg';
import type { Collection } from '../../models/Collection';
import Icon from '../common/Icon';
import type { ImageT } from '../../models/Image';
import { useUserStore } from '../../hooks/userStore';
import { useEffect, useState } from 'react';
import CollectionCreation from './CollectionCreation';
import { useAuthStore } from '../../hooks/authStore';
import { useNavigate } from 'react-router-dom';

interface Props {
    collections: Collection[];
    setSelectedCollection: (c: Collection) => void;
    selected?: Collection | null;
    image: ImageT;
}

function CollectionSelector({ collections, setSelectedCollection, selected, image }: Props) {
    const navigate = useNavigate();
    const { isAuthenticated, loadingAuth } = useAuthStore();
    const { user } = useUserStore();
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        if (!isAuthenticated && !loadingAuth) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate, loadingAuth]);

    if (!user)
        return <></>;

    return (
        <>
            <Menu withinPortal>
                <Menu.Target>
                    <Button rightSection={<Icon src={chevronDown} />} variant="filled" color="gray">
                        {selected ? selected.name : 'Select collection'}
                    </Button>
                </Menu.Target>

                <Menu.Dropdown miw={260} bg="dimmed">
                    <ScrollArea style={{ maxHeight: 280 }}>
                        {collections.map((c, idx) => {
                            const isSelected = selected === c;
                            return (
                                <Menu.Item key={idx} onClick={() => setSelectedCollection(c)}>
                                    <Group wrap="nowrap">
                                        <Text size="sm" lineClamp={1}>
                                            {c.name}
                                        </Text>

                                        {c.shared && (
                                            <Badge variant="light" color="white">Shared</Badge>
                                        )}

                                        {isSelected && <Icon src={checkIcon} />}
                                    </Group>
                                </Menu.Item>
                            );
                        })}

                        {selected && <Menu.Divider />}
                        <Menu.Item onClick={() => setCreating(true)}>
                            <Text size="sm">+ Create new collection</Text>
                        </Menu.Item>


                    </ScrollArea>
                </Menu.Dropdown>
            </Menu>
            <CollectionCreation
                user={user}
                image={image}
                opened={creating}
                onClose={() => setCreating(false)}
                existingCollections={collections}
            />
        </>
    );
}

export default CollectionSelector;