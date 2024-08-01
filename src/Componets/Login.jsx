import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import GoogleButton from 'react-google-button';
// import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  //   function rechapcha(value) {
  //     console.log("Captcha value:", value);
  //   }
  //   <ReCAPTCHA
  //   sitekey="Your client site key"
  //   onChange={rechapcha}
  // />,
//  document.body


    const handleClick = (e) => {
        e.preventDefault(); // Prevent default form submission
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                alert("Log in Successfully with Google");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                alert("Login successful");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className=''>
            <div className='login-main'>
                <form className='login-form'>
                    <img src='https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg' alt="Logo" />
                    <h1 style={{ fontSize: "24px", fontWeight: "500", lineHeight: "28px", paddingTop: "24px" }}>Log in to DJI</h1>
                    <div style={{ padding: "24px 0px" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <Link to='' style={{ fontSize: "12px" }}>Forget Password</Link>
                        </div>
                        <div className="mb-3 form-check align-items-center d-flex mt-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label pt-1 ps-2" style={{ fontSize: "13px" }} htmlFor="exampleCheck1">Click to get exclusive DJI benefits, latest offers, and updates.</label>
                        </div>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-dark w-100" style={{ padding: "15px 0px" }}>Login</button>
                    <div style={{ textAlign: "center", paddingTop: "8px", fontSize: "14px" }}>NEW user?<Link to='/Register' style={{ textDecoration: "none" }}>Create Your DJI Account</Link></div>
                    <div className='row justify-content-center' style={{ height: "48px", alignItems: "center" }}>
                        <span className='col-5'>----------------------</span>
                        <span className='col-1'>or</span>
                        <span className='col-5'>----------------------</span>
                    </div>
                    <GoogleButton
                        onClick={handleClick} style={{width:"100%"}}
                    />
                    <div style={{ fontSize: "12px", paddingTop: "15px" }}>By continuing, you hereby agree to the <Link>Privacy Policy</Link> and <Link>Terms of use</Link></div>
                </form>
            </div>
        </div>
    );
}

export default Login;
