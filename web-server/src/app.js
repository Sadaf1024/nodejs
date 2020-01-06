const express = require('express')
const path = require('path')

const app = express()

// console.log(path.join(__dirname,'../Public'))

const publicDirectry = path.join(__dirname,'../Public')

app.use(express.static(publicDirectry))

// app.get('',(req, res) => {
//     res.send('Hello Express')
// })

app.get('/help',(req, res) => {
    res.send({
        'name': 'Andrew',
        'age': '27'
    })
})

// app.use()

app.get('/about',(req, res) => {
    res.send('This is About page')
})

app.get('/weather',(req, res) => {
    res.send('Weather Page')
})

app.listen(3000, () => {
    console.log('Server is Up')
})