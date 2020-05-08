const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.raw())

app.use(express.static(path.join(__dirname,'client','build')))

//routes 
const apiRoutes = require('./routes/api')
app.use('/api',apiRoutes)


// client handling
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','build','index.html'))
})


// App
const port = process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})