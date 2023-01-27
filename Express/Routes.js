
const express =  require('express')

const {Homepage, Datapage, UserData, Userpostdata, Adduser, Signupdata,Deleteuser,Updateuser } = require('./Controler/index')
// const {Signupdata, Datapage} = require('./Controler/index')


const router = express.Router()

router.post('/savedata', Signupdata)

router.get('/', Homepage)

router.get('/home', Datapage)

router.get('/user', UserData)

router.get('/userdata/:id', Userpostdata)

router.post('/adduser', Adduser)

router.put('/updateuser/:id', Updateuser)

router.delete('/removeuser/:id', Deleteuser)
 


module.exports = router