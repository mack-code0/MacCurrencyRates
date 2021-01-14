const express = require('express');
const app = express()
const ratesAPI = require("./api/rates")

app.use("/", ratesAPI)

const PORT = process.env.PORT || 3000
app.listen(PORT)