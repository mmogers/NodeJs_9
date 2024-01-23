
const express = require('express') // add modul from downloaded external library

const app = express()//will manage server using this const

app.set('view engine', 'ejs') //set the template ejs
app.use(express.urlencoded({extended:false}))
app.use(express.static('public')) //will be run before every get function 


app.get('/', (req,res) => { //anonim function will be reflected on the main page
   //res.sendFile(__dirname + '/index9.html')
   res.render('index9') //working with ejs
})//watch the main page url

app.get('/about', (req,res) => { 
    //res.send('About Us')
    res.render('about')
})

app.get('/user/:username/', (req,res) => {  //dynamic value
    //res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`) //from url
    let data = {username: req.params.username, hobbies: ['Football', 'Skate', 'Basketball']}
    res.render('user', data)
})

app.post('/check-user' , (req, res) => {
    console.log(req.body) // all data from form
    let username = req.body.username
    if (username ==""){
        return res.redirect('/')
    } else{
        return res.redirect('/user/' + username)
    }

}) //post will work only when the data was transferred on this url check-user



const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server started: http://localhost:${PORT}`)
}) //3000-port, call back function afet server is run

