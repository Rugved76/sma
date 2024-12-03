import * as AuthApi from '../api/AuthRequest.js';

export const logIn = (formData) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await AuthApi.login(formData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'AUTH_FAIL' })
    }
}



export const signUp = (formData) => async (dispatch) => {   // Action

    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await AuthApi.signup(formData);    // Api
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: 'AUTH_FAIL' })
    }
}


export const logOut = () => async (dispatch) => {
    dispatch({ type: "LOG_OUT" })
}