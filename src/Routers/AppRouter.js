import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'
import { firebase } from '../Firebase/firebaseConfig'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../Components/Journal/JournalScreen'
import { useDispatch } from 'react-redux'
import { login } from '../Actions/Auth'

export const AppRouter = () => { 

    const dispatch = useDispatch()

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) =>{
          if ( user?.uid ) {
              dispatch( login(user.uid, user.displayName) )
          }
      }) 
    }, [ dispatch ])


    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                     />
                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                     />
                    <Redirect 
                        to="/auth/login"
                    />
                </Switch>
            </div>
        </Router>
    )
}
