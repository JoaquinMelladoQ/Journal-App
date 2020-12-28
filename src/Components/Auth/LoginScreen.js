import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <h3>Login</h3>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email" 
                />

                <input
                    type="password"
                    placeholder="password"
                    name="password" 
                />

                <button
                    type="submit"
                >
                    Login
                </button>
                <hr />

                <div>
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>  
                </div>
                
            </form>
        </>
    )
}
