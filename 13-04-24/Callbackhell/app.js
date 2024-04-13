function DownLoad(url,Compress)
{
    console.log('file is start downloading.....');
    setTimeout(()=>{
        const img=url.split('/').pop();
        Compress(img);
    },2000);
}

function Compress(img,com)
{
    console.log('file start Compressing.... ');
    setTimeout(()=>{
        const comp=img.split('.')[0]+'Zip';
        com(comp);
    })
}

function Upload(comp,upl)
{
    console.log('file is Start Uplaoding ...');
    setTimeout(()=>{
        const data='httpS:\\LocalStorage '+comp;
        upl(data);
    },1000);
}
DownLoad("https://www.facebook.com/Profile.jpg",function(path){
        console.log(`file is downloaded Sucessfully ...${path}`)
        Compress(path,function(cmp){
            console.log(`file is compressed SucessFully .... ${cmp}`);
            Upload(cmp,function(upl){
                console.log(`file is upload SucessFully  ....${upl}`);
        })
    })
})
