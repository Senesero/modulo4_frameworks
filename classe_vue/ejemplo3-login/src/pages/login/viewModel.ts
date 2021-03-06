import { FieldValidationResult } from 'lc-form-validation'
import { loginRequest } from '../../rest-api/api/login/login';

interface Login {
  name: string;
  password: string;
}

const createEmptyLogin = (): Login => ({
  name: '',
  password: '',
});

interface LoginError {
  name: FieldValidationResult;
  password: FieldValidationResult;
}

const createEmptyLoginError = (): LoginError => ({
  name: {
    key: 'name',
    succeeded: true,
    errorMessage: '',
    type: '',
  },
  password: {
    key: 'password',
    succeeded: true,
    errorMessage: '',
    type: '',
  }
});

export { Login, createEmptyLogin, LoginError, createEmptyLoginError };