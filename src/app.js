import express from 'express'
import employeesroutes from './routes/employees.routes.js'
import indexroutes from './routes/index.routes.js'

const app =express()
app.use (express.json())

app.use ('/api',employeesroutes)
app.use (indexroutes)

app.use((req,res, next)=>{
    res.status (404).json({
        message: 'endopoint not found'
    })
})
export default app;