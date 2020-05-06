const express = require('express')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')


const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.raw())


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index',{
        name: 'Souvik',
        code: '',
        link: ''
    })
})

app.post('/',(req,res)=>{
    const code = req.body.code
    let date = new Date() 
    const sec = date.getMilliseconds()
    fs.writeFileSync(path.join(__dirname,'public','files',`${sec}.txt`),code)
    res.render('index',{
        code: req.body.code,
        link: `http://localhost:3000/files/${sec}.txt`
    })
})

app.get('/share',async (req,res)=>{
    let filename = req.query.filename
    const code = fs.readFileSync(path.join(__dirname,'public','files',filename))
    res.render('share',{
        code: code
    })
})


app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server started on port ${process.env.PORT || 3000}`)
})
