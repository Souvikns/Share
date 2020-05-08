const router = require('express').Router()
const {base} = require('../utils/airtable')


router.route('/share')
    .post(async (req,res)=>{
        let code = req.body.code
        let language = req.body.language

        const response = {
            code: code,
            language: language
        }

        console.log(response)

        let ids=[]
        let url = ""

        await base("Codes").create([
            {
                "fields": {
                    code: code,
                    language: language
                }
            }
        ],(err,records)=>{
            if(err){
                console.log(err)
                return res.status(404).json(err)
            }

            records.forEach(record=>{
                ids.push(record.getId())
            })
            console.log(ids)
            url = `http://localhost:3000/share/${ids[0]}`

            return res.status(200).json({url: url})

        })


        // url = "http://localhost:3000/share/1"

        // return res.status(200).json({url: url})

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