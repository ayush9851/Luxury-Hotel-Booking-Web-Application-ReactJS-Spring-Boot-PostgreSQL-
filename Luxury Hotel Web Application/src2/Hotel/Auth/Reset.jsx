import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Reset() {

    const [email, setEmail] = useState("");

    const handleReset = () => {

        if (!email) {
            alert("Please enter email");
            return;
        }

        // 👉 Backend not implemented yet
        alert("Reset link sent to " + email);
    };

    return (
        <div className='auth-loginpage'>
            <div className='auth-logincard'>
                <h2>Reset Password</h2>
                <p>Enter your email and we'll send you a password reset link</p>

                <input 
                    type="email" 
                    placeholder='Email address' 
                    className='auth-inputc'
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <button className='bc' onClick={handleReset}>
                    Send Reset Link
                </button>

                <p>Back to <Link to='/Login'>Login</Link></p>

            </div>
        </div>
    )
}

export default Reset