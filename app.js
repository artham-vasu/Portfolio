const express = require("express");
const path = require("path");

const app = express();
const port = 80;


// EXPRESS SPECIFIC STUFF
// app.use(express.static('static', options))
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.set('view engine', 'html') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory




//ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {}
    res.status(200).render('index.html', params);
})
// app.get('/contact', (req, res)=>{
//     const con = "This is the best content on the internet so far so use it wisely"
//     const params = {}
//     res.status(200).render('contact.pug', params);
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});