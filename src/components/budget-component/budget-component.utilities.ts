import { IComponent } from "components/budget-breakdown/budget-breakdown.types";
import FirebaseService from "utilities/firebase-service";

export const useComponent = (componentId: string) => {
    const { firestore, auth } = FirebaseService;
    const user = auth.currentUser;
    const componentRef = firestore.collection(`users/${user?.uid}/components`).doc(componentId);

    const deleteComponent = () => {
        return componentRef.delete();
    };

    const updateComponent = (value: Partial<IComponent>) => {
        return componentRef.update(value);
    };

    return { deleteComponent, updateComponent };
};
