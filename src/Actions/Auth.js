import { firebase, googleAuthProvider } from '../Firebase/firebaseConfig'
import { types } from '../Types/Types'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            
            dispatch(login( '123', 'aoeu' ))

        }, 2000);
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( userCred => {
                console.log(userCred)
            } )
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})