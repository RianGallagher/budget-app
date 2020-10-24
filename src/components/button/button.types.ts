import { IconDefinition} from '@fortawesome/fontawesome-common-types';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly children?: React.ReactNode;
    readonly icon: IconDefinition;
    readonly isIconOnly?: boolean;
}   
