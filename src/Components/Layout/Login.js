// import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({

        email: "",
        password: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }
    
    const postLogin= async(e)=>{
        e.preventDefault();
       
const { email, password, }=user;
       
        const res = await fetch("http://localhost:8000/api/login", {
            method: "POST", headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({

                 email, password
            })
        })
       
     const data = await res.json();
     if(data.status ===400 || !data){
         window.alert("Login Fail")

     }
     else{
         window.alert("Login sucessful")
     }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                {console.log("User", user)}
                <div className="col-md-6 offset-md-3 mb-5 shadow-lg p-3">
                    <form >
                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={user.email} placeholder="Email Address" className="form-control" onChange={handleChange} />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={user.password} placeholder="Password" className="form-control" onChange={handleChange} />
                        </div>


                        <button className="btn btn-primary" onClick={postLogin}>Login</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Login