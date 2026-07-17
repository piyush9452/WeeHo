import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import { useAdmin } from '../../Context/AdminContext';

const Admin = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secret, setSecret] = useState('');

    const [login, setLogin] = useState(true);

    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    const [message, setMessage] = useState('');

    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    const {loginAdmin} =  useAdmin()

    const navigate = useNavigate();

    useEffect(() => {

        if (!showOtp) return;

        setTimer(60);
        setCanResend(false);

        const interval = setInterval(() => {

            setTimer((prev) => {

                if (prev === 1) {

                    clearInterval(interval);
                    setCanResend(true);

                    return 0;
                }

                return prev - 1;

            });

        }, 1000);

        return () => clearInterval(interval);

    }, [showOtp]);

    const handleResendOtp = async () => {

        try {

            const res = await axios.post(
                "http://localhost:5000/admin/resendOtp",
                {
                    email,
                    secretKey: secret
                }
            );

            setMessage(res.data.message);

            setTimer(60);
            setCanResend(false);

        }
        catch (error) {

            setMessage(error.response?.data?.message || "Something went wrong");

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (login) {

                const res = await axios.post(
                    "http://localhost:5000/admin/login",
                    {
                        email,
                        password
                    }
                );

                setMessage(res.data.message);
                loginAdmin(res?.data?.admin , res?.data?.token)
                navigate("/admin/dashboard");


            }
            else {

                if (!showOtp) {

                    const res = await axios.post(
                        "http://localhost:5000/admin/sendOtp",
                        {
                            email,
                            secretKey: secret
                        }
                    );

                    setMessage(res.data.message);

                    setShowOtp(true);

                }
                else {

                    const res = await axios.post(
                        "http://localhost:5000/admin/register",
                        {
                            name,
                            email,
                            password,
                            otp,
                            secretKey: secret
                        }
                    );

                    setMessage(res.data.message);

                    setShowOtp(false);
                    setLogin(true);

                    setName('');
                    setEmail('');
                    setPassword('');
                    setSecret('');
                    setOtp('');

                }

            }

        }
        catch (error) {

            console.log(error.response?.data);

            setMessage(
                error.response?.data?.message ||
                "Something went wrong"
            );

        }

    };

    return (

        <div className="admin-container">

            <div className={`otp-panel ${showOtp ? "show" : ""}`}>

                <h2>Verify OTP</h2>

                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />

                {
                    canResend ?

                        <p
                            className="toggle"
                            onClick={handleResendOtp}
                        >
                            Resend OTP
                        </p>

                        :

                        <p>
                            Resend OTP in {timer}s
                        </p>

                }

            </div>

            <form
                className="admin-form"
                onSubmit={handleSubmit}
            >

                <h1>
                    {
                        login
                            ? "Admin Login"
                            : "Admin Registration"
                    }
                </h1>

                {
                    !login && (
                        <>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Admin Secret Key"
                                value={secret}
                                onChange={(e) => setSecret(e.target.value)}
                            />
                        </>
                    )
                }

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">

                    {
                        login
                            ? "Login"
                            : showOtp
                                ? "Verify OTP & Register"
                                : "Send OTP"
                    }

                </button>

                <p>{message}</p>

                <p
                    className="toggle"
                    onClick={() => {

                        setLogin(!login);
                        setShowOtp(false);

                        setOtp('');
                        setMessage('');

                    }}
                >

                    {
                        login
                            ? "Don't have an account? Register"
                            : "Already have an account? Login"
                    }

                </p>

            </form>

        </div>

    );

};

export default Admin;