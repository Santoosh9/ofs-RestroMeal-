// import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Register=()=> {

    const history= useHistory();
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
        
    })
   
    const handleChange = (e) =>{
        const {name,value}= e.target

       setUser({
           ...user,
           [name]: value,
       })
    }
                
    const postData= async(e)=>{
        e.preventDefault();


       //desturection
const {name, email, password, }=user;
       
        const res = await fetch("http://localhost:8000/api/register", {
            method: "POST", headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({

                name, email, password
            })
        })

        const data = await res.json();
        if(data.status ===400 || !data){
            window.alert("Regestation Fail")
            
        }
        else{
            window.alert("Regestation Sucessful")
            

            // eslint-disable-next-line no-restricted-globals
            history.push("/login");
        }

    }
    return (
        <>
        
        <Navbar/>
          <div className="container">
              {console.log("User",user)}
              <div className="col-md-6 offset-md-3 mb-5 shadow-lg p-3">
            <form method='POST'>
                <div className="col-12 mb-3">
                    <label htmlFor="fristname" >Name</label>
                    <input type="text" name="name" value={user.name} placeholder="Name" className="form-control" onChange={handleChange}/>
                </div>


                <div className="col-12 mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={user.email} placeholder="Email Address" className="form-control" onChange={handleChange}/>
                </div>

                <div className="col-12 mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} placeholder="Password" className="form-control" onChange={handleChange}/>
                </div>

              

                <button className="btn btn-primary" onClick={postData}>Register</button>
            </form>

              </div>
              </div>  

             
        </>
    )
}

export default  Register

