const express = require('express')
const { send } = require('process')
const app = express()


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

app.get('/:ball', (req, res) => {
    let sum = parseInt(req.params.ball)
    let score =parseInt(req.query.score)
    switch (sum) {
        case 2:
            // insertABall('green ')
            res.json({
                color: 'green', 
                sum : sum + 1, 
                score: score += 3
            })
            // score += 3
            break

        case 4:
            res.json({
                color: 'blue', 
                sum : sum + 1, 
                score: score += 5
            })
            break

        case 14:
            res.json({
                color: 'purple', 
                sum : sum + 1, 
                score: score += 15
            })
            break

        default:
            res.json({
                color: 'pink', 
                sum : sum + 1, 
                score: score += 1
            })
    }

    // res.json('Hello ')
    console.log('params', req.params, 'qu', req.query)
})




app.listen(3000, () => console.log('Server on '))