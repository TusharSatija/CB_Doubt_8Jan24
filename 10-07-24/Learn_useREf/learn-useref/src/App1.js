import React, { useEffect, useRef, useState } from 'react'
const App1 = () => {
    const prev=useRef(null);
    const [count,setcount]=useState(0);
    // let prevCount=null;
    useEffect(()=>{
        // prevCount=count;
        // console.log(prevCount);
        prev.current=count;
    });

    return (
    <>
    <h1> Previous Count : {prev.current}</h1>
    <h1> current Count :  { count}</h1>
    <button onClick={()=>setcount(count+1)}>click</button>
    </>
  )
}

export default App1