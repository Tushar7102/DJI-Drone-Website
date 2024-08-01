import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function rechapcha(value) {
       console.log("Captcha value:", value);
  }

  const Submit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const provider = new GoogleAuthProvider();
    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            alert("Log in Successfully with Google");
        })
        .catch((err) => {
            alert(err.message);
        });
};
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
        // const password = document.getElementsByClassName("confime-pass")
        // console.log(password)
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
            <div className='register-main'>
                <form className='register-form'>
                    <img src='https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg' alt="Logo" />
                    <h1 style={{ fontSize: "24px", fontWeight: "500", lineHeight: "28px", paddingTop: "24px" }}>Create Your DJI Account</h1>
                    <div style={{ padding: "24px 0px" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}>Password</label>
                            <input type="password" className="form-control"  id="Pass" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}>Enter new password again</label>
                            <input type="password" className="form-control confime-pass" id='confime-pass' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <ReCAPTCHA style={{display:"flex", justifyContent:"center", margin:"20px 0px"}}
    sitekey="Your client site key"
    onChange={rechapcha}
  />
                            <label className="form-check-label pt-1 ps-2" style={{ fontSize: "13px", color:"#707473"}} htmlFor="exampleCheck1">By creating account, you confirm that you agree to DJI <Link to='' style={{ textDecoration: "none", color:"black"}}>Privacy Policy</Link> And <Link to='' style={{ textDecoration: "none", color:"black"}}>Terms od Use</Link></label>

                        <div className="mb-3 form-check align-items-center d-flex mt-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label pt-1 ps-2" style={{ fontSize: "13px",color:"#707473"  }} htmlFor="exampleCheck1">Get announcements, recommendations and updates about DJI products, services, software updates and more.</label>
                        </div>
                        
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-dark w-100" style={{ padding: "15px 0px" }}>Submit</button>
                    <div style={{ textAlign: "center", padding: "10px 0px 30px 0px", fontSize: "14px" }}>Already have an account? <Link to='/Login' style={{ textDecoration: "none" }}>Login in Now</Link></div>
                    <div style={{ fontSize: "14px", paddingTop: "15px", textAlign:"center"}}>Need help with registration? <Link>FQA DJI Support</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Register