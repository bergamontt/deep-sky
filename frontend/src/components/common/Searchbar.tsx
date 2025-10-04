import { Kbd, TextInput } from "@mantine/core";
import search from '../../assets/search.svg'
import Icon from "./Icon";

type SearchbarProps = {
    label?: string;
    description?: string;
    placeholder: string;
    width?: string;
    glass?: boolean;
}

function Searchbar({label, description, placeholder, width="md", glass=false}: SearchbarProps) {
    const glassStyles = {
        input: {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#fff',
        }};
    return(
        <TextInput
            label={label}
            leftSection={<Icon src={search}/>}
            rightSection={<Kbd mr="1.8em">Enter</Kbd>}
            description={description}
            placeholder={placeholder}
            size="md"
            w={width}
            styles={glass ? glassStyles : undefined}
        />
    );
}

export default Searchbar