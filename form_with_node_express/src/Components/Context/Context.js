import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const userInfoContext = createContext();
export const updateUserInfoContext = createContext();


export function Context(Props) {

    const [data, setdata] = useState([{}]);
    const [updatedata, setUpdatedata] = useState(
        {
        id: "",
        name: "",
        email: "",
        password: "",
        phone: ""
        }
    );

 
    return (
        <>
             
            <userInfoContext.Provider value={[{data, setdata}]}  >
                <updateUserInfoContext.Provider value={{updatedata, setUpdatedata}}  >
                    {Props.children}
                </updateUserInfoContext.Provider>
            </userInfoContext.Provider>
            
        </>
    )


}



// import React from 'react'
// import { useState } from 'react'
// import { createContext } from 'react'

// export const userInfoContext = createContext();
// export const updateusercontext = createContext();


// export function Context(Props) {

//     const [data, setdata] = useState([{}]);
//     const [userdata, setUserdata] = useState({})
//     const [showdata, setshowdata] = useState(false)
 
//     return (
//         <>
             
//             <userInfoContext.Provider value={{data, setdata,userdata,setUserdata}}  >
//                 {Props.children}
//             </userInfoContext.Provider>
//             <updateusercontext.Provider value={{showdata, setshowdata}}  >
//                 {Props.children}
//             </updateusercontext.Provider>
//         </>
//     )


// }


