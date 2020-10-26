import React from "react";
import { Formik, Form, Field } from "formik";

import FirebaseService from "../../utilities/firebase-service";

import { IFormValues } from "./income-form.types";
import "./income-form.scss";

const IncomeForm = () => {
    const { firestore, auth } = FirebaseService;
    const { uid } = auth.currentUser!;
    const userRef = firestore.doc(`users/${uid}`);

    /**
     * Update the users income in the database.
     * @param formValues.income The income that the user has submitted.
     */
    const onSubmit = ({ income }: IFormValues) => {
        userRef.update({
            income: parseInt(income),
        });
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
