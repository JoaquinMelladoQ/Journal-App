import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { setError, removeError } from '../../Actions/Ui'
import validator from 'validator'

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const state = useSelector( state => state )
    console.log(state)

    const [ formValues, handleInputChange ] = useForm({
        name: 'Lele',
        email: 'lele@gmail.com',
        password: '1234',
        password2: '1234',
    })

    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        if ( isFormValid() ) {
            console.log('Form is correct')
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            dispatch( setError('name is required') )
            return false
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('email is not valid') )
            return false 
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('password should be at least 6 characters and match each other') )
            return false
        }
        dispatch( removeError() )
        return true
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister } >
                <div className="auth__alert-error">
                    Alert error
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input" 
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input" 
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
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange } 
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Register
                </button>

                <Link
                    className="link" 
                    to="/auth/login"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
