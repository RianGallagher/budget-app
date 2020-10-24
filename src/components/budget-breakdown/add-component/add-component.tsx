import React from "react";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import Button from "../../button";
import { ModalContainer, Modal } from "../../modal";
import FirebaseService from "../../../utilities/firebase-service";

import { IFormValues } from "./add-component.types";
import "./add-component.scss";

const AddComponent = () => {
    const { auth, firestore } = FirebaseService;
    const componentsRef = firestore.collection("components");

    const onSubmit = (hideModal: VoidFunction) => async (formValues: IFormValues) => {
        const { uid } = auth.currentUser!;
        await componentsRef.add({
            uid,
            ...formValues,
        });
        hideModal();
    };

    return (
        <div>
            <ModalContainer>
                {({ showModal, hideModal }) => (
                    <>
                        <Modal>
                            <Formik<IFormValues>
                                initialValues={{ title: "", percentage: "" }}
                                onSubmit={onSubmit(hideModal)}
                                validationSchema={Yup.object().shape({
                                    title: Yup.string().required(),
                                    percentage: Yup.string().required(),
                                })}
                            >
                                <Form>
                                    <div className="field">
                                        <label htmlFor="title">Title</label>
                                        <Field name="title" type="text" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="percentage">Percentage</label>
                                        <Field name="percentage" type="number" />
                                    </div>
                                    <Button icon={faSave} type="submit">
                                        Add Component
                                    </Button>
                                </Form>
                            </Formik>
                        </Modal>
                        <Button icon={faPlus} onClick={showModal} isIconOnly />
                    </>
                )}
            </ModalContainer>
        </div>
    );
};

export default AddComponent;
