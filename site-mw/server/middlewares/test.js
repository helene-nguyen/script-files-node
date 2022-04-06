const express = require('express');
const test = express.Router();

test.get('/test', (req, res, next) => {
    res.render('pages/home-test');

});

test.post('/test', (req, res, next) => {
    /* res.send('<h1>Router works !</h1>'); */
    res.render('pages/home-test')

    const array = req.body.info;
    console.log(`My array ${array}`);
    console.log('-------------');

    let found = array.find(elem =>
        parseInt(elem, 10) === 6
        //elem > 4 //take the first value that passes the test
    );
    console.log(`I've found the number ${found}`)
    console.log('-------------');

    let filtered = array.filter(elem =>
        elem > 4
    );
    console.log(`I have filtered my array ${filtered}`);
    console.log('-------------');

    let sortAsc = array.sort((a, b) => {
        return a - b; //ascending order
    });
    console.log(`I have sort my array ascending [ ${sortAsc} ]`);

    let sortDesc = array.sort((a, b) => {
        return b - a; //descending order
    });
    console.log(`I have sort my array descending [ ${sortDesc} ]`);

});



module.exports = test;