const express = require('express');
const route = express.Router()
const axios = require("axios").default

route.get("/api/rates", (req, res)=>{
    const {base, symbols} = req.query

    console.log(base+" "+symbols);
    
    axios({
        method: "GET",
        url: "http://api.exchangeratesapi.io/v1/latest?access_key="+process.env.MY_KEY+"&symbols="+symbols+"&format=1",
        responseType: "text"
    }).then((resp)=>{
        const result = {
            'result': {
                'base': resp.data.base,
                'date': resp.data.date,
                'rates': resp.data.rates
            }
        }
        res.json(result)
    }).catch((err)=>{
        res.statusCode = 400
        res.json({
            "more": base+" "+symbols,
            'error': "An error occured while parsing your request"
        })
    })
})

module.exports = route