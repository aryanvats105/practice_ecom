const express = require('express');
const app = express()
app.use(express.json())
require('./dbConnection/db')
app.use(require('./routes/product'))
app.use(require('./routes/cart'))
app.use(require('./routes/checkout'))

// port will be fetched from env file in prod
app.listen(3000)

