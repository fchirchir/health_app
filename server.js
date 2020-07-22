const express = require('express');

const app = express();

//setup a view engine
app.set('view engine', 'ejs');

//set a static folder
app.use(express.static('public'));

//route for doctor page

app.get('/', (req, res)=>{
    res.render('doctor');
})

// Define the port number
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});
