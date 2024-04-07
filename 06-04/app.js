let form = document.querySelector('form');
let span1=document.querySelector('span');
let btn=document.querySelector('#btn');
let age1=document.querySelector('#age1');
console.log(form);


document.addEventListener('keydown',function validate()
{
    if(form[0].value==="")
    {
        span1.innerText="name can't be empty...";
        btn.type="hidden";
    }
    if(form[0].value.length<=3)
    {
        span1.innerText="name is too short ....";
        btn.type="hidden";
    }
    if(form[1].value<=17)
    {
        console.log(form[1].value)
        age1.innerText="too young...";
        btn.type="hidden";
    }
    else{
        btn.type="submit";
        span1.innerText="";
    }
});