import React from "react";
import { Formik, Form, Field } from "formik";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";

import Button from "../../button";

import { IProps, IFormValues } from "./component-form.types";
import "./component-form.scss";

const defaultInitialValues: IFormValues = { title: "", percentage: null };

const validationSchema = Yup.object()
    .required()
    .shape({
        title: Yup.string().required(),
        percentage: Yup.number().required().min(0, "Number must be greater than 0"),
    });

const ComponentForm = ({ buttonLabel, initialValues = defaultInitialValues, onSubmit }: IProps) => {
    const handleSubmit = (formValues: IFormValues) => {
        const values = validationSchema.cast(formValues);
        onSubmit(values);
    };

    return (
        <Formik<IFormValues> initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
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
                    {buttonLabel}
                </Button>
            </Form>
        </Formik>
    );
};

export default ComponentForm;
