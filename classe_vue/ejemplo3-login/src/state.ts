import { createEmptyLogin, createEmptyLoginError } from './pages/login/viewModel'

export const state = {
    login: createEmptyLogin(),
    loginError: createEmptyLoginError(),
}