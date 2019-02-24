import { ValidationConstraints, Validators, createFormValidation } from 'lc-form-validation';

const validationConstrains: ValidationConstraints = {
    fields: {
        name: [
            { validator: Validators.required }
        ],
        password: [
            { validator: Validators.required }
        ]
    }
}

export const validations = createFormValidation(validationConstrains);