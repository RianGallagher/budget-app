import { firestore } from "firebase";

export interface IProps {
    readonly expensesRef: firestore.CollectionReference<firestore.DocumentData>;
}
