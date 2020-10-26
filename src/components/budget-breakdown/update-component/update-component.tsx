import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import Button from "../../button";
import { ModalContainer, Modal } from "../../modal";
import FirebaseService from "../../../utilities/firebase-service";
import ComponentForm from "../component-form";
import { IFormValues } from "../component-form/component-form.types";

import { IProps } from "./update-component.types";

const UpdateComponent = ({ componentId, ...component }: IProps) => {
    const { firestore, auth } = FirebaseService;
    const { uid } = auth.currentUser!;
    const componentRef = firestore.collection(`users/${uid}/components`).doc(componentId);

    const onSubmit = (hideModal: VoidFunction) => async (formValues: IFormValues) => {
        try {
            await componentRef.update(formValues);
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

export default UpdateComponent;
