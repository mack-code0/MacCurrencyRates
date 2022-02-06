const express = require('express');
const route = express.Router()
const axios = require("axios").default

route.get("/api/rates", (req, res)=>{
    const {base, symbols} = req.query
    
    axios({
        method: "GET",
        url: "https://api.exchangeratesapi.io/latest?access_key="+process.env.MY_KEY+"&base="+base+"&symbols="+symbols,
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