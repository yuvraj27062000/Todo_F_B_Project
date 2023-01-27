const data = require('../UserData.json')

const fs = require('fs')

const Homepage = (req, res) => {
    res.send("my data is loaded on brouser ");
}

const Datapage = (req, res) => {
    res.send("<h1>my data is loaded on home screen </h1>    ");
}

const UserData = (req, res) => {
    res.send(data);
}

const Userpostdata = (req, res) => {
    const UserId = req.params

    const UserData = data.find((val) => val.id == UserId.id)
    if (UserData) {
        res.send(UserData)
    }
    else {
        res.send("Userdata not found")
    }


}

const Signupdata = (req, res) => {

    const user = req.body
    console.log('user', user);

    if (!user) {

        return res.status(400).json({
            success: false,
            message: 'Data  is not given'
        })
    }
    else {

        data.push(user)
        fs.writeFileSync(__dirname + '/../UserData.json', JSON.stringify(data), 'utf-8')
        return res.status(201).json({
            success: true,
            message: ' userdata added successfully'
        })
    }

}

const Deleteuser = (req, res) => {
    let id = req.params.id
console.log(id);
    try {
        
         
        const filterdata = data.filter((val) => val.id != id)
        console.log(filterdata.length);
        
        if (!filterdata) {

            return res.status(400).json({
                success: false,
                message: 'Data  is not given'
            })
        }
        else {
            fs.writeFileSync(__dirname + '/../UserData.json', JSON.stringify(filterdata), 'utf-8')
            return res.status(201).json({
                success: true,
                message: 'userdata deleted successfully'
            })
        }
    } catch {
        console.log('Error Occure on  deleting user');
    }
}

const Adduser = (req, res) => {


    const userdata = req.body;
    if (userdata) {
        data.push(userdata);

        fs.writeFileSync(__dirname + '/../UserData.json', JSON.stringify(data), 'utf-8')
        return res.status(201).json(
            {
                success: true,
                message: ' userdata added successfully'
            }
        )
    } else {
        return res.status(400).json({
            success: false,
            message: 'Data  is not given'
        })
    }



}

const Updateuser =  (req,res)=>{
    // console.log(req.params.id);
    // console.log(req.body);
        try {
            data.forEach((product,i)=>{
                if(product.id == req.params.id){
                    data.splice(i, 1, req.body);
                }
            })
            // console.log(data);
            fs.writeFileSync(__dirname + '/../UserData.json', JSON.stringify(data), 'utf-8')
            return res.status(201).json(
                {
                    success: true,
                    message: ' userdata updated successfully'
                }
            )
         
             
    
         } catch  {
            console.log('Error Occure on updating user');
         }
         
    }

module.exports = {
    Homepage,
    Datapage,
    UserData,
    Userpostdata,
    Adduser,
    Signupdata,
    Deleteuser,
    Updateuser
}