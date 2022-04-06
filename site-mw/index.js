//^import modules
const express = require('express'),
    app = express(),
    //
    router = require('./server/middlewares/router'),
    error = require('./server/middlewares/error'),
    //test
    test = require('./server/middlewares/test');

//~body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//~statics
app.use('/', express.static('./front/public'));
//~motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/front/views');

//~middlewares
//router
app.use(router);

//!TEST ZONE
app.use(test);

//error
app.get('*', error);


//~launch server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
});