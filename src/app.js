const express=require('express');
const app=express();
const port = process.env.PORT || 5000;
const path=require('path'); 
const hbs=require('hbs');

//static-path
 const static_path=path.join(__dirname,'../public');
 app.use(express.static(static_path));

//template path
const templatepath=path.join(__dirname,'../templates/views');
const partialspath=path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialspath);


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render('404error')
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}...`)
});