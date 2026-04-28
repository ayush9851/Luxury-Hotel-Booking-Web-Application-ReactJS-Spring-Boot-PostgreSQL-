import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Signup() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSignup = () => {

        if (user.password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        fetch("http://localhost:8090/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert("Signup Successful!");
            })
            .catch(err => {
                console.error(err);
                alert("Error in signup");
            });
    };

    return (
        <div className='auth-loginpage'>
            <div className='auth-logincard'>
                <h2>Create Account</h2><br />

                <input
                    type="text"
                    name="name"
                    placeholder='Username'
                    className='auth-inputb'
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    className='auth-inputb'
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    className='auth-inputb'
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="password"
                    placeholder='Confirm Password'
                    className='auth-inputb'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /><br /><br />

                <button className='auth-bb' onClick={handleSignup}>
                    Signup
                </button><br />

                <p> Already have a account? <br />
                    <Link to='/Login'>Login</Link>
                </p>

            </div>
        </div>
    )
}

export default Signup