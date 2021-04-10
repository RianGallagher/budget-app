import { IUser } from "components/budget-page/budget-page.types";
import { useDocumentData } from "react-firebase-hooks/firestore";
import FirebaseService from "utilities/firebase-service";

const useUser = () => {
    const { firestore, auth } = FirebaseService;
    const currentUser = auth.currentUser;

    const userRef = firestore.doc(`users/${currentUser?.uid}`);
    const [user] = useDocumentData<IUser>(userRef);
    return user ?? null;
};

export default useUser;
