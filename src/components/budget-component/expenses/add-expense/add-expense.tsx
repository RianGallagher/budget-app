import React from "react";

import { IProps } from "./add-expense.types";
import "./add-expense.scss";
import Button from "components/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalContainer } from "components/modal";
import ExpenseForm from "../expense/expense-form";
import { IExpense } from "../expense/expense.types";

/**
 * A button that, when clicked, opens a modal with a form for creating an expense.
 * @param props.expensesRef The database reference of the expenses being updated.
 */
const AddExpense = ({ expensesRef }: IProps) => {
    const addExpense = (hideModal: VoidFunction) => async (formValues: IExpense) => {
        try {
            await expensesRef.add(formValues);
        } catch (error) {
            console.error("Failed to add expense", error);
        }
        hideModal();
    };

    return (
        <div className="add-expense">
            <ModalContainer>
                {({ hideModal, showModal }) => (
                    <>
                        <Modal>
                            <ExpenseForm onSubmit={addExpense(hideModal)} />
                        </Modal>
                        <Button onClick={showModal} icon={faPlus}>
                            Add Expense
                        </Button>
                    </>
                )}
            </ModalContainer>
        </div>
    );
};

export default AddExpense;
