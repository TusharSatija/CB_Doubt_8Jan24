let cal=document.querySelector('div');
let inp=document.querySelector('input');
console.log(cal)
console.log(inp)
document.addEventListener('click',(e)=>{
    let Target=e.target.innerText;
        if(Target==='C')
        {
            inp.value="";
        }
        else if(Target==='del')
        {
            if(inp.value!="")
            {
                let res=inp.value.split("");
                console.log(res)
                res.pop();
                inp.value=res.join("");
            }
        }
        else if(Target==='=')
        {
            try{
                inp.value=eval(inp.value);

            }catch(e){
                inp.value="ERROR";
            }
        }
        else{
            inp.value+=Target;
        }
})