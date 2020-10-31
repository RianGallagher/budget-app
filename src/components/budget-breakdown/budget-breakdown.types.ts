export interface IProps {}

export interface IComponent {
    readonly title: string;
    readonly percentage: number;
}

export interface IComponentWithId extends IComponent {
    readonly componentId: string;
}
