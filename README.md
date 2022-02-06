# Getting currency exchange rates using Exchangeratesapi.io

As i haven't upgraded my plan on the api, I'm only limited to getting exchange rates of `EUR` to other currencies.

## How it works

This app was hosted in HEROKU and the link to the app is available [here](https://maccurrencyrate.herokuapp.com/api/rates)

The exchangeratesapi requires an access key which I already provided in the backend though Heroku by adding the api key as a Config Variable then accessed it through Nodejs's `process.env`.

All you need to do is Simply attach `symbol` to the endpoint as a query parameter....
The `symbol` holds the symbol(s) of currencies you want to check it's rates....

## `Example`

[https://maccurrencyrate.herokuapp.com/api/rates?symbols=USD,AUD,CAD,PLN,MXN](https://maccurrencyrate.herokuapp.com/api/rates?symbols=USD,AUD,CAD,PLN,MXN)

The response is in JSON format... you'll get the exchange rates of `EUR` to the currencies listed in `symbol`