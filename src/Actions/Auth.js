import { firebase, googleAuthProvider } from '../Firebase/firebaseConfig'
import { types } from '../Types/Types'
import { finishLoading, startLoading } from './Ui'

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( startLoading() )

        dispatch( finishLoading() )

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ))


            }).catch( e => {
                console.log(e)
                dispatch( finishLoading() )
            } )
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({
                    displayName: name
                })
                
                dispatch(
                    login( user.uid, user.displayName )
                )
            }).catch( e => {
                console.log(e)
            } )
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            })
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
})