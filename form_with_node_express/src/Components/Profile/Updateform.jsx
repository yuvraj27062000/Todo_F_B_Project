
import React from "react";
import { useState, useEffect, useContext } from "react";


import { userInfoContext, updateUserInfoContext } from '../Context/Context';

import { useNavigate } from "react-router-dom";

export const Updateform = (User) => {
    const [{ data, setdata }] = useContext(userInfoContext)
    const { updatedata, setUpdatedata } = useContext(updateUserInfoContext)

    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        phone: ""
    });
    const userid = updatedata[0].id
    console.log(userid);
    const Navigate = useNavigate()


    const handler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const fetchapi = async () => {

        try {
            console.log(user);
            console.log("coming to u[date");
            const response = await fetch(`http://localhost:5000/updateuser/${userid}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            // const fetchdata = await response.json();

            data.forEach((product, i) => {
                if (product.id === userid) {
                    data.splice(i, 1, user);
                }
            })
            console.log(data);
            setdata(data)
        }
        catch (e) {
            console.log("error");
        }
    }

    const validate = (e) => {
        e.preventDefault();
        fetchapi()
        Navigate('/')
    }

    useEffect(() => {

        setUser({ ...updatedata[0] })

    }, [])

    return (<>
        <h1>Addite user detail</h1>
        <div className="signupdiv">


            <form className="signupform" onSubmit={validate}  >
                Name: <input type="text" name="name" placeholder="Name..." value={user.name} onChange={handler} required />

                Email: <input type="email" name="email" placeholder="Email..." value={user.email} onChange={handler} required />

                {/* Password: <input type="password" name="password" placeholder="password..." value={user.password} onChange={handler} required /> */}

                Phone: <input type="number" name="phone" placeholder="Phone..." onChange={handler} value={user.phone} required /><br />

                <button type="submit" value="submit" >save</button>
            </form>

        </div>
    </>)
}