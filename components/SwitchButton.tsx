import { Switch } from 'react-native';

type SwitchButtonProps = {
    isActive: boolean,
    onClick: () => void,
};

export function SwitchButton(props: SwitchButtonProps) {

return (
    <Switch
        trackColor={{false: '#767577', true: '#f4f3f4'}}
        thumbColor={props.isActive ? 'red' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.onClick}
        value={props.isActive}
    />
    );
};