const express = require('express') // add modul from downloaded external library

const app = express()//will manage server using this const

app.get('/', (req,res) => { //anonim function will be reflected on the main page
    res.send('Hello main page')//meanwhile show only text
})//watch the main page url

app.get('/about', (req,res) => { 
    res.send('About Us')
})

app.get('/user/:username/:id', (req,res) => {  //dynamic value
    res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`) //from url
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server started: http://localhost:${PORT}`)
}) //3000-port, call back function afet server is run