import { LoginForm } from './loginForm';
import {
    createFormValidation,
    ValidationConstraints,
    Validators,
} from 'lc-form-validation';

const loginFormValidationContrains: ValidationConstraints = {
    fields: {
        login: [
            { validator: Validators.required }
        ],
        password: [
            { validator: Validators.required }
        ]
    }
}

export const LoginFormValidation = createFormValidation(loginFormValidationContrains)