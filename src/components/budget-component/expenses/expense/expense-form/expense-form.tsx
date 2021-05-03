import React from "react";

import { IFormValues, IProps } from "./expense-form.types";
import "./expense-form.scss";
import { Field, Form, Formik } from "formik";
import Button from "components/button";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { defaultInitialValues, validationScheme } from "./expense-form.utilities";

/**
 * A form for creating or updating an expense.
 * @param initialValues An optional initial values object.
 * @param onSubmit      The function that will run when the form is submitted.
 */
const ExpenseForm = ({ initialValues = defaultInitialValues, onSubmit }: IProps) => {
    const handleSubmit = (formValues: IFormValues) => {
        const values = validationScheme.cast(formValues);
        onSubmit(values);
    };

    return (
        <Formik<IFormValues> initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationScheme}>
            <Form>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                </div>
                <div className="field">
                    <label htmlFor="value">Value</label>
                    <Field name="value" type="number" />
                </div>
                <Button icon={faSave} type="submit">
                    Save Expense
                </Button>
            </Form>
        </Formik>
    );
};

export default ExpenseForm;
