const express = require('express')
const path = require('path')
const hbs = require('hbs')
const utils = require('../../../Utils/app')

// utils.geoCode()``
const app = express()

// console.log(path.join(__dirname,'../Public'))

const publicDirectry = path.join(__dirname)
const views = path.join(__dirname,'../templates/views')
const partials = path.join(__dirname,'../templates/partials')

console.log(views)

app.set('view engine','hbs')
app.set('views', views)
hbs.registerPartials(partials)

app.use(express.static(publicDirectry))

app.get('',(req, res) => {
    
    res.render('index',{
        
            name: 'Andrew',
            age: '27'
    })
})



app.get('/about',(req, res) => {
    res.render('about',{
        
        name: 'Andrew',
        age: '27'

})
})

app.get('/products', (req, res) => {
    if(!req.query.search){
    res.send({
        name:'Sadaf Ali'
    })
}else{
    res.send({
        Search: 'You Enter your search'
    })
}

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