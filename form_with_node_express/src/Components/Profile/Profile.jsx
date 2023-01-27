import React from 'react'

import { useEffect, useState, useContext } from 'react'
import { userInfoContext, updateUserInfoContext } from '../Context/Context';
import './Profile.css'
import { useNavigate } from 'react-router-dom'

// import axios from 'axios';  
export function Profile() {
    const [{ data, setdata }] = useContext(userInfoContext)
    const { updatedata, setUpdatedata } = useContext(updateUserInfoContext)
    const Navigate = useNavigate()


    const FetchingApis = async () => {


        try {
            const response = await fetch('http://localhost:5000/user');
            const data = await response.json();
            setdata(data)
        }
        catch (e) {
            console.log("error");
        }
    }

    const Deleteuser = async (user) => {


        try {
            const response = await fetch(`http://localhost:5000/removeuser/${user.userid}`, {
                method: 'delete'
            });
            const userdata = data.filter((val) => user.userid !== val.id)

            setdata(userdata)
        }
        catch (e) {
            console.log("error");
        }
    }
    const Updateuser = async (user) => {

        try {
            const userdata = data.filter((val) => user.userid === val.id)
            setUpdatedata(userdata)
            Navigate('/additform')

        } catch {

        }



    }

    useEffect(() => {
        FetchingApis()
    }, [])
    useEffect(() => {
        // FetchingApis()
        console.log('rendered');
        FetchingApis()
    }, [])

    return (

        <>
            <h2>USer dataList </h2>
            <div className='profilediv'>

                <table className='profiletable'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    {data.map((val, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td><button onClick={() => { Deleteuser({ userid: val.id }) }} >delete</button><button onClick={() => { Updateuser({ userid: val.id }) }} >Update</button></td>

                            </tr>
                        )
                    })}

                </table>
            </div>
            <div></div>

        </>
    )
}

export default Profile


// import React from 'react'

// import { useEffect, useState, useContext } from 'react'
// import { userInfoContext, updateusercontext } from '../Context/Context';
// import './Profile.css'
// import {Updateform} from './Updateform'
// import axios from 'axios';  
// export function Profile() {
// const [ {data, setdata, updateuserdata, setUpdateuserdata} ] = useContext(userInfoContext)

// const userdata = useContext(userInfoContext)
// console.log(props);

// console.log(updateuserdata);

//     const showform = useContext(updateusercontext)
// console.log(showform.showdata);

// const [showadditingform, setadditingform] = useState(false);
// const FetchingApis = async () => {


//     try {
//         const response = await fetch('http://localhost:5000/user');
//         const data = await response.json();
//         console.log("state");
//         setdata(data)
//     }
//     catch (e) {
//         console.log("error");
//     }
// }

// const Deleteuser = async (user) => {


//     try {
//         const response = await fetch(`http://localhost:5000/removeuser/${user.userid}`, {
//             method: 'delete'
//         });
//         const userdata = data.filter((val) => user.userid !== val.id)

//         setdata(userdata)
//     }
//     catch (e) {
//         console.log("error");
//     }
// }
// const Updateuser = (user) => {
//     const updateuserdata = data.filter((val) => user.userid === val.id);
//     setUpdateuserdata(updateuserdata)
//     setadditingform(true)
// if (showform) {
//     FetchUpdateaip(user)
//     setadditingform(false)

// }
// }

// const FetchUpdateaip = async (user) => {
//     try {


//         const response = await fetch(`http://localhost:5000/updateuser/${user.userid}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(updateuserdata)
//         });
//         // const fetchdata = await response.json();

//         data.forEach((product, i) => {
//             if (product.id === user.userid) {
//                 data.splice(i, 1, updateuserdata);
//             }
//         })
//         setdata(data)
//     }
//     catch (e) {
//         console.log("error");
//     }
// }

// useEffect(() => {
//     FetchingApis()
//     console.log("useEffect");
// }, [])

// return (

//     <>
//         <h2>USer dataList </h2>
//         <div className='profilediv'>

//             <table className='profiletable'>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Action</th>
//                 </tr>
{/* {data.map((val, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td><button onClick={() => { Deleteuser({ userid: val.id }) }} >delete</button><button onClick={() => { Updateuser({ userid: val.id }) }} >Update</button></td>

                            </tr>
                        )
                    // })} */}

{/* </table>
            </div> */}
{/* {showadditingform && <Updateform userdata={updateuserdata} />} */ }

{/* </>

    )
}

export default Profile */}
