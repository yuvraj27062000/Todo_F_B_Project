
const Express = require('express');
const app = Express();
const routes = require('./Routes');
const cors = require('cors')
// const whitelist = ['http://localhost:3000']



// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

app.use(cors())



// app.use(cors());

// app.use(urlencoded())

app.use(Express.json()) 



// const { urlencoded } = require('express');

app.use(routes)

 
 
let port = 5000;
app.listen(port, ()=>{
    console.log('my server is running on ',port,' port number');
})