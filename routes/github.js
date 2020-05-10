const router = require('express').Router()

router.route('/callback')
    .get((req,res)=>{
        console.log(req.query.code)
        return res.redirect('/')
        res.send('Hello')
    })


module.exports = router