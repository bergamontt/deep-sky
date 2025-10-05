import { Modal, TextInput, Button, Group } from "@mantine/core";
import { useEffect, useState } from "react";

type PinpointModalProps = {
    opened: boolean,
    onClose: () => void,
    defaultName: string,
    onSave: (name: string) => void
};

function PinpointModal({ opened, onClose, defaultName, onSave }: PinpointModalProps) {
    const [name, setName] = useState(defaultName);
    useEffect(() => setName(defaultName), [defaultName]);
    return (
        <Modal opened={opened} onClose={onClose} title="Name pinpoint">
            <TextInput
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="Pinpoint name"
                mb="sm"
            />
            <Group ml={0}>
                <Button variant="default" onClick={onClose}>Cancel</Button>
                <Button onClick={() => onSave(name)}>Save</Button>
            </Group>
        </Modal>
    );
}

export default PinpointModal;