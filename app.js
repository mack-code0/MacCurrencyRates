const express = require('express');
const app = express()
const ratesAPI = require("./api/rates")

app.get("/index", (req, res)=>{
    var form = "<form action='/api/rates' method='GET'>"
    +"<input type='text' name='base' placeholder='Base' />"
    +"<input type='text' name='rates' placeholder='Rates' />"
    +"<input type='submit' />"
    +"</form>"
    res.send(form)
})

app.use("/api", ratesAPI)

const PORT = process.env.PORT || 3000
app.listen(PORT)