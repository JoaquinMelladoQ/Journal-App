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

export const AppRouter = () => { 

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) =>{
          console.log(user)
      }) 
    }, [])


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
