import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../Components/Auth/LoginScreen'
import { RegisterScreen } from '../Components/Auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <Switch>
                <Route 
                    exact
                    path="/auth/login"
                    component={ LoginScreen }
                />
                <Route 
                    exact
                    path="/auth/register"
                    component={ RegisterScreen }
                /> 
                <Redirect 
                    to="/auth/login"
                />
            </Switch>
        </div>
    )
}
