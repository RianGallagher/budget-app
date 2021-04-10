import { IComponentWithId } from "components/budget-breakdown/budget-breakdown.types";
import { useCollectionData } from "react-firebase-hooks/firestore";
import FirebaseService from "utilities/firebase-service";

const useComponents = () => {
    const { firestore, auth } = FirebaseService;
    const user = auth.currentUser;
    const componentsRef = firestore.collection(`users/${user?.uid}/components`);
    return useCollectionData<IComponentWithId>(componentsRef, {
        idField: "componentId",
    });
};

export default useComponents;
