const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/**
* @api {get} /user/:id Request User information
* @apiName GetUser
* @apiGroup User
*
* @apiParam {Number} id Users unique ID.
*
* @apiSuccess {String} firstname Firstname of the User.
* @apiSuccess {String} lastname  Lastname of the User.
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "firstname": "John",
*       "lastname": "Doe"
*     }
*/
app.get('/user/:id', (req, res) => {
    var firstname = "John";
    var lastname = "Doe";
    res.send({ firstname: firstname, lastname: lastname });
    return;
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
