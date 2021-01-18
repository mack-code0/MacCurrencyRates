const express = require('express');
const route = express.Router()
const axios = require("axios").default

route.get("/api/rates", (req, res)=>{
    const base = req.query.base
    const rates = req.query.currency
    
    axios({
        method: "GET",
        url: "https://api.exchangeratesapi.io/latest?base="+base+"&symbols="+rates,
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
            'error': "An error occured while parsing your request"
        })
    })
})

module.exports = route