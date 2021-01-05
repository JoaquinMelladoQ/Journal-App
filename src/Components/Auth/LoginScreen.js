import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../Hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../Actions/Auth'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: 'lala@gmail.com',
        password: '123456'
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch( startLoginEmailPassword(12345, 'lele') )
    }

    const handleGoogloLogin = () => {
        dispatch( startGoogleLogin() )
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form 
              onSubmit={ handleLogin }
            >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input" 
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogloLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>  
                </div>
                <Link
                    className="link" 
                    to="/auth/register"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
