import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Auth.css'

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // handle input change
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // handle login
    const handleLogin = () => {

        if (!user.email || !user.password) {
            alert("Please enter email and password");
            return;
        }

        fetch("http://localhost:8090/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.text())
            .then(data => {

                if (data === "Login Successful") {
                    alert(data);

                    // ✅ store email for later (booking use)
                    localStorage.setItem("userEmail", user.email);
                    navigate("/Booking");

                } else {
                    alert(data);
                }

            })
            .catch(err => {
                console.error(err);
                alert("Error in login");
            });
    };

    return (
        <div className='auth-loginpage'>
            <div className='auth-logincard'>
                <h2>Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    className='auth-inputa'
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    className='auth-inputa'
                    onChange={handleChange}
                /><br /><br />

                <button className='auth-ba' onClick={handleLogin}>
                    Login
                </button><br /><br />

                <Link to={'/Reset'}>
                    <p className='auth-forgot'>Forgot Password</p>
                </Link>

                <p className='auth-click'>
                    Don't have account?
                    <Link to={'/Signup'}> Click Here</Link> <br />
                    for Signup
                </p>

            </div>
        </div>
    )
}

export default Login