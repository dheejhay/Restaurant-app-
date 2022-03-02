const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 6060

app.use(express.static('Public'));
app.use(expressLayouts)
app.use(express.urlencoded({extended:true}))
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

const pageRoute = require('./server/routes/pageRoutes' );
app.use('/', pageRoute)

const commentRoute = require('./server/routes/commentRoutes')
app.use('/', commentRoute)

const menuRoute = require('./server/routes/menuRoutes')
app.use('/', menuRoute)

const orderRoute = require('./server/routes/orderRoutes')
app.use('/', orderRoute)



app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})