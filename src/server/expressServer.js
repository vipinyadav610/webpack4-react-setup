import express from 'express'
import dbconnect from './dbconnect'
import middleware from './middleware'
import { GetUser } from './controller/user/user.controller'
const app = express()
dbconnect(app)
middleware(app)
app.get('/user', GetUser)

export default app
