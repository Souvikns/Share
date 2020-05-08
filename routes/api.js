const router = require('express').Router()


router.route('/share')
    .post((req,res)=>{
        let code = req.body.code
        let language = req.body.language

        const response = {
            code: code,
            language: language
        }

        console.log(response)
        let url = "http://localhost:3000/share/1"

        return res.status(200).json({url: url})

    })
    .get((req,res)=>{
        code = req.body.id
        const response = {
            code: `console.log("Hello World")`,
            language: "javascript"
        }

        res.status(200).json(response)
    })

module.exports = router