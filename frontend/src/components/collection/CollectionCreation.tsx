import { useCallback, useEffect, useState } from 'react';
import { Modal, TextInput, Button, Stack, Checkbox } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import type { Collection } from '../../models/Collection';
import { createCollection } from '../../services/collectionService';
import type { User } from '../../models/User';
import type { ImageT } from '../../models/Image';

interface Props {
    user: User;
    image: ImageT;
    opened: boolean;
    onClose: () => void;
    existingCollections: Collection[];
}

function CollectionCreation({ user, image, opened, onClose, existingCollections }: Props) {
    const [name, setName] = useState('');
    const [share, setShare] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!opened) {
            setName('');
            setShare(false);
            setLoading(false);
        }
    }, [opened]);

    const handleCreate = useCallback(async () => {
        const trimmed = name.trim();
        if (!trimmed) {
            notifications.show({
                title: 'Invalid name',
                message: 'Collection name cannot be empty.',
                color: 'red',
            });
            return;
        }

        if (existingCollections.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
            notifications.show({
                title: 'Duplicate name',
                message: 'A collection with this name already exists.',
                color: 'red',
            });
            return;
        }

        try {
            setLoading(true);
            const dto = { appUserId: user.id, imageId: image.id, name: trimmed, shared: share };
            await createCollection(dto);

            notifications.show({
                title: 'Collection created',
                message: `Collection "${trimmed}" was successfully created!`,
                color: 'green',
            });

            onClose();
        } catch (err) {
            notifications.show({
                title: 'Error',
                message: 'Collection creation failed. Please try again.',
                color: 'red',
            });
        } finally {
            setLoading(false);
        }
    }, [name, share, user.id, image.id, existingCollections, onClose]);

    return (
        <Modal opened={opened} onClose={onClose} title="Create a new collection" centered>
            <Stack>
                <TextInput
                    label="Collection name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCreate();
                    }}
                    disabled={loading}
                />

                <Checkbox
                    checked={share}
                    onChange={(event) => setShare(event.currentTarget.checked)}
                    label="Share this collection with other users"
                    disabled={loading}
                />

                <Button onClick={handleCreate} loading={loading}>
                    Create
                </Button>
            </Stack>
        </Modal>
    );
}

export default CollectionCreation;
