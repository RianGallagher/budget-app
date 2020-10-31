export interface IProps<T> {
    readonly children: (data: T) => JSX.Element;
    readonly data: T | undefined | null;
    readonly isReady: boolean;
}
