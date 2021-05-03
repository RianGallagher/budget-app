import React from "react";

import { IProps } from "./update-expense-button.types";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import "./update-expense-button.scss";
import { ModalContainer, Modal } from "components/modal";
import ExpenseForm from "../expense-form";
import { IExpense } from "../expense.types";

/**
 * A button that, when clicked, will open a modal with a form for updating an expense.
 * @param props.expense       The expense being updated.
 * @param props.updateExpense A function to update an expense in the database.
 */
const UpdateExpenseButton = ({ expense, updateExpense }: IProps) => {
    const onSubmit = (hideModal: VoidFunction) => async (formValues: IExpense) => {
        try {
            await updateExpense(formValues);
        } catch (error) {
            console.log(`Bad times`, error);
        }
        hideModal();
    };
    return (
        <ModalContainer>
            {({ hideModal, showModal }) => (
                <>
                    <Modal>
                        <ExpenseForm initialValues={expense} onSubmit={onSubmit(hideModal)} />
                    </Modal>
                    <Button icon={faEdit} onClick={showModal} />
                </>
            )}
        </ModalContainer>
    );
};

export default UpdateExpenseButton;
