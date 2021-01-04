import { types } from '../Types/Types'


export const authReducer = ( state = {}, action ) => {
    switch (acion.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return { }
        default:
            return state
    }
}