const express= require('express')
const port = process.env.PORT || 8000;
const app = express()
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Databse connection setup
require("../ProjectBackend/database/connection")



// routeting
const categoryRoute=require('./routes/categoryroute')
const register=require('./routes/registerroute');
const { login } = require('./controller/registercontroller');
const AdminRoutes=require('./routes/Adminroute')
const foodList=require('./routes/Adminroute')





// middleware
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
// connect routes with server
app.use('/api',categoryRoute )
app.use('/api',register )
app.use('/api', login )
app.use('/api', AdminRoutes)
app.use('/api', foodList)




// server setup
app.listen(port, ()=>{
    console.log(`server start on port ${port}`);
})