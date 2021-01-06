import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import validator from 'validator'

export const RegisterScreen = () => {

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
            console.log('name is required')
            return false
        } else if ( !validator.isEmail( email ) ) {
            console.log('email is not valid')
            return false 
        }
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
