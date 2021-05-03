import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import { ModalContainer, Modal } from "components/modal";
import ComponentForm from "components/budget-breakdown/component-form";

import { IProps } from "./update-component-button.types";
import { IComponent } from "components/budget-breakdown/budget-breakdown.types";

/**
 * A button that will open a modal for editing the component.
 * @param props.componentId The ID of the component being updated.
 * @param props.component   The component being edited.
 */
const UpdateComponentButton = ({ updateComponent, ...component }: IProps) => {
    const onSubmit = (hideModal: VoidFunction) => async (formValues: IComponent) => {
        try {
            await updateComponent(formValues);
        } catch (error) {
            console.error("well that didnt work", error);
        }
        hideModal();
    };

    return (
        <div>
            <ModalContainer>
                {({ showModal, hideModal }) => (
                    <>
                        <Modal>
                            <ComponentForm
                                buttonLabel="Update Component"
                                initialValues={component}
                                onSubmit={onSubmit(hideModal)}
                            />
                        </Modal>
                        <Button icon={faEdit} onClick={showModal} isIconOnly />
                    </>
                )}
            </ModalContainer>
        </div>
    );
};

export default UpdateComponentButton;
