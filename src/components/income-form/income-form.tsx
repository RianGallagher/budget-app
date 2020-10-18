import React from "react";
import { Formik, Form, Field } from "formik";

import { IFormValues, IProps } from "./income-form.types";
import "./income-form.scss";

const IncomeForm = ({ setIncome }: IProps) => {
    const onSubmit = ({ income }: IFormValues) => {
        setIncome(parseInt(income));
    };

    return (
        <Formik<IFormValues> initialValues={{ income: "" }} onSubmit={onSubmit}>
            <Form>
                <div className="field">
                    <label htmlFor="income">Income</label>
                    <Field name="income" type="number" />
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    );
};

export default IncomeForm;
