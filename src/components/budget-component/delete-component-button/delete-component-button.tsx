import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";

import { IProps } from "./delete-component-button.types";
import "./delete-component-button.scss";

/**
 * A button that will delete the budget components.
 * @param props.componentId The ID of the component being deleted.
 */
const DeleteComponentButton = ({ deleteComponent }: IProps) => {
    const onClick = async () => {
        try {
            await deleteComponent();
        } catch (error) {
            console.error("That is not good", error);
        }
    };

    return <Button onClick={onClick} icon={faTrash} isIconOnly />;
};

export default DeleteComponentButton;
