import * as Yup from "yup";

export const validationScheme = Yup.object()
    .required()
    .shape({
        name: Yup.string().required(),
        value: Yup.number().required().min(0, "Value must be higher than 0"),
    });

export const defaultInitialValues = { name: "", value: null };
