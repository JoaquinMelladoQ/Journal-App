import { types } from "../Types/Types";

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
})
export const removeError = () => ({
    type: types.uiRemoveError 
})