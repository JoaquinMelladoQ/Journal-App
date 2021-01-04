import { types } from '../Types/Types'

export const login = (uid, displayName) => {
    return {
        type: types.login
    }
}