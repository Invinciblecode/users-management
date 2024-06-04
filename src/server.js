import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import user from '../models/user.js'
// user route
import addUserRoute from "./routes/user/add-user.js"
import editUserRoute from './routes/user/edit-user.js'
import deleteUserRoute from './routes/user/delete-user.js'
const PORT = process.env.PORT || 3000

//middleware
// user
app.use(express.json())
app.use(addUserRoute)
app.use(editUserRoute)
app.use(deleteUserRoute) 
// database
mongoose.connect(process.env.DBURL)
.then( () =>{
    console.log('connected to the database')
})
.catch( (err) =>{
    console.log(err)
})
app.listen( PORT , () =>{
    console.log('server is running on port 3000')
})
