const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear',() =>{
return new Date().getFullYear();
});

hbs.registerHelper('getWelcomeMessage',(text) =>{
    return text.toUpperCase();
    });

app.set('view engine','hbs');
//app.use(express.static(__dirname +'/public'));
var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
  };
  
  app.use(myLogger);


app.use((req,res,next) => {
var now = new Date().getFullYear();
var log=`${now}: ${req.method} ${req.url}`;
console.log(log);
fs.appendFile('server.log',log,err =>{
    if(err)
    {
        console.log('Unknown Error');
    }
});
next();
});

app.get('/',(req,res) => {
    res.send({
        name: 'Andrew',
        Likes: ['Biking','Cities']
    });
});

app.get('/about',(req,res) =>{
res.render('about.hbs',{
pageTitle:'About Page',
currentYear: new Date().getFullYear()
});
});
app.get('/home',(req,res) =>{
    res.render('home.hbs',{
        data: 'Welcome to home page'    
});
});
app.get('/categories',(req,res) =>{
    res.render('categories.hbs',{
        data: 'Data for category Page'    
});
});
app.get('/bad',(req,res)=>{
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});

