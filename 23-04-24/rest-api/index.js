const exp = require('constants');
const express=require('express');
const app=express();
const path=require('path');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

let blogs=[
    {
        id:1,
        tittle:'First blog',
        url:'https://media.istockphoto.com/id/518548465/photo/reflections-of-branches.webp?s=2048x2048&w=is&k=20&c=mup8wfXKDgqD0oJMGeZo7KlH887pSB8IU3PuLiEWzBc=',
        desc:'leaves and circles on the water in the pond.',
    },
    {
        id:2,
        tittle:'second blog ',
        url:'https://media.istockphoto.com/id/865002898/photo/reflection-of-autumn-yellow-trees-in-pond-in-a-park.jpg?s=2048x2048&w=is&k=20&c=p76ERQ9CXaXnVodCbkFmyHXOx8ruhaWhGaqYSpFU_yQ=',
        desc:'reflections of branches of trees in an autumn pond'
    }

];

app.get('/blogs',(req,res)=>{
    res.render('index',{blogs});
})
app.get('/blogs/new',(req,res)=>{ 
    res.render('new');
})
app.post('/blogs',(req,res)=>{
    console.log(req.body);
    const {id ,tittle,url,desc}=req.body;
    blogs=[{tittle,id,url,desc},...blogs];
    console.log(blogs);
    res.redirect('/blogs');
})

app.get('/edit',(req,res)=>{
    res.send('this is a edit route');
})
app.get('/show',(req,res)=>{
    res.send('this is a show route');
})
app.get('/delete',(req,res)=>{
    res.send('this is a delete route');
})


app.listen(3000,()=>{
    console.log('server is runnig at port 3000');
});