const express = require('express')
const app = express()

//rout - base rout (root)
// app.get('/', function(req, res){



// })


app.get('/', function (req, res) {

    console.log('hello mate');
    res.send("hi welcome")
})

app.get('/books', function (request, response) {

    const bookInfo = {
        108: {
            title: 'the name of the wind',
            author: 'shoob'
        }
    }


    response.send(bookInfo)
})




const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
