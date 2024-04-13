function fun()
{
    return new Promise((res,rej)=>{
        // rej();
        res();
        
    })
}

console.log(fun());