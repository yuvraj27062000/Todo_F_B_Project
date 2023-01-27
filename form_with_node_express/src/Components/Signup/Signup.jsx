
import React from "react";
import { useRef,useContext } from "react";
import './Signup.css'
import { userInfoContext } from '../Context/Context';

import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [{data,setdata}] =  useContext(userInfoContext)

    const Navigate = useNavigate()
    const Name = useRef()
    const Email = useRef()
    const Password = useRef()
    const Phone = useRef()

    const UserInfo = {
        id: "",
        name: "",
        email: "",
        password: "",
        phone: ""
    }

    const fetchapi = () => {
        fetch('http://localhost:5000/savedata',
            {

                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(UserInfo)

            })
            .then((res) => {
                return res.json()
            })
            .then((data) =>  data )
            

    }



    const validate = async (e) => {
        e.preventDefault();

        UserInfo[Name.current.name] = Name.current.value
        UserInfo[Email.current.name] = Email.current.value
        UserInfo[Password.current.name] = Password.current.value
        UserInfo[Phone.current.name] = Phone.current.value
        UserInfo['id'] =Math.floor( Math.random() * 1000000000000);

        
        data.push(UserInfo)
        setdata(data)
        await fetchapi()
        
        Navigate('/')
    }

    return (<>
        <h1>Signup Form</h1>
        <div className="signupdiv">


            <form className="signupform" onSubmit={validate}  >
                Name: <input type="text" name="name" placeholder="Name..." ref={Name} required />

                Email: <input type="email" name="email" placeholder="Email..." ref={Email} required />

                Password: <input type="password" name="password" placeholder="password..." ref={Password} required />

                Phone: <input type="number" name="phone" placeholder="Phone..." ref={Phone} required /><br />

                <button type="submit" value="submit" >Signup</button>
            </form>

        </div>
    </>)
}