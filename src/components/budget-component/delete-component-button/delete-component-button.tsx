import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import FirebaseService from "utilities/firebase-service";

import { IProps } from "./delete-component-button.types";
import "./delete-component-button.scss";

/**
 * A button that will delete the budget components.
 * @param props.componentId The ID of the component being deleted.
 */
const DeleteComponentButton = ({ componentId }: IProps) => {
    const { firestore, auth } = FirebaseService;
    const { uid } = auth.currentUser!;
    const componentRef = firestore.collection(`users/${uid}/components`).doc(componentId);

    const onClick = () => {
        try {
            componentRef.delete();
        } catch (error) {
            console.error("That is not good", error);
        }
    };

    return <Button onClick={onClick} icon={faTrash} />;
};

export default DeleteComponentButton;
