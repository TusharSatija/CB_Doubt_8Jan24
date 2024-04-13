function DownLoad(url)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const img=url.split('/').pop();
            res(img);
        },2000);
    });
}

function compress(img)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const comp=img.split('.')[0]+".Zip";
            res(comp);
        },3000);
    })
}

function upload(comp)
{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const upl='https://www.LocalStorage'+comp;
            res(upl);
;        }, 1000);
    })
}

DownLoad('https://www.facebook.com/Profile.jpg')
.then((img)=>{
    console.log(`file is DownLoaded Sucessfully ${img}`)
    compress(img)
    .then((comp)=>{
        console.log(`file is compressed Successfullt ..${comp}`)
        upload(comp)
        .then((upl)=>{
            console.log(`file is Uploaded SucessFully ... ${upl}`)
        })
    })
})

