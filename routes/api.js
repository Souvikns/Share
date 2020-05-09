const router = require('express').Router()
const { base } = require('../utils/airtable')


router.route('/share')
    .post(async (req, res) => {
        console.log(req)
        let code = req.body.code
        let language = req.body.language

        const response = {
            code: code,
            language: language
        }

        console.log(response)

        let ids = []
        let url = ""

        await base("Codes").create([
            {
                "fields": {
                    code: code,
                    language: language
                }
            }
        ], (err, records) => {
            if (err) {
                console.log(err)
                return res.status(404).json(err)
            }

            records.forEach(record => {
                ids.push(record.getId())
            })
            console.log(ids)
            if(process.env.HA){
                url = `http://localhost:3000/share/${ids[0]}`
            }else{
                url = `https://share-c.herokuapp.com/share/${ids[0]}`
            }
            

            return res.status(200).json({ url: url })

        })


        // url = "http://localhost:3000/share/1"

        // return res.status(200).json({url: url})

    })
    
router.route('/share/:id')
    .get((req,res)=>{
        let id = req.params.id
        console.log(id)

        base("Codes").find(id,(err,record)=>{
            if(err){
                return res.status(404).json(err)
            }

            return res.status(200).json({
                code: record.get('code'),
                language: record.get('language')
            })
        })
    })

module.exports = router