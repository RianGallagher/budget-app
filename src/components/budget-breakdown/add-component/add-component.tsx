import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "../../button";
import { ModalContainer, Modal } from "../../modal";
import FirebaseService from "../../../utilities/firebase-service";
import ComponentForm from "../component-form";
import { IFormValues } from "../component-form/component-form.types";

import "./add-component.scss";

const AddComponent = () => {
    const { firestore, auth } = FirebaseService;
    const { uid } = auth.currentUser!;
    const componentsRef = firestore.collection(`users/${uid}/components`);

    const onSubmit = (hideModal: VoidFunction) => async (formValues: IFormValues) => {
        try {
            await componentsRef.add(formValues);
        } catch (error) {
            console.error("well that didnt work", error);
        }
        hideModal();
    };

    return (
        <div className="add-component">
            <ModalContainer>
                {({ showModal, hideModal }) => (
                    <>
                        <Modal>
                            <ComponentForm buttonLabel="Add Component" onSubmit={onSubmit(hideModal)} />
                        </Modal>
                        <Button icon={faPlus} onClick={showModal}>
                            Add Component
                        </Button>
                    </>
                )}
            </ModalContainer>
        </div>
    );
};

export default AddComponent;
