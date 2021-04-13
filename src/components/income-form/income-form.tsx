import { Views } from "constants/views";

import React from "react";
import { Formik, Form, Field } from "formik";
import FirebaseService from "utilities/firebase-service";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Button from "components/button";
import { Variant } from "components/button/button.types";
import { useHistory } from "react-router-dom";

import { IFormValues } from "./income-form.types";
import "./income-form.scss";

/**
 * A form that allows the user to input their income.
 */
const IncomeForm = () => {
    const { firestore, auth } = FirebaseService;
    const { uid } = auth.currentUser!;
    const userRef = firestore.doc(`users/${uid}`);
    const history = useHistory();

    /**
     * Update the users income in the database.
     * @param formValues.income The income that the user has submitted.
     */
    const onSubmit = async ({ income }: IFormValues) => {
        await userRef.update({
            income: parseInt(income),
        });
        history.push(Views.Breakdown);
    };

    return (
        <Formik<IFormValues> initialValues={{ income: "" }} onSubmit={onSubmit}>
            <Form>
                <div className="field">
                    <label htmlFor="income">Income</label>
                    <Field name="income" type="number" />
                </div>
                <Button icon={faSave} type="submit" variant={Variant.positive}>
                    Submit
                </Button>
            </Form>
        </Formik>
    );
};

export default IncomeForm;
