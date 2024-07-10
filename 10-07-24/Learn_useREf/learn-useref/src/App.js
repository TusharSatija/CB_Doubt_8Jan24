import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0);
  const [count1,setcount1]=useState(0);
  useEffect(()=>{
    console.log("inside useEffect...")
  },[count1]);
  function changeCount1()
  {
    setcount(count+1);
    console.log("count changed");
  }
  function changeCount2()
  {
    setcount1(count1+1);
    console.log("count changed");
  }


  return (
    <>
    <h1> Count : {count} </h1>
    <h1> Count1 : {count1} </h1>

    <button onClick={changeCount1}>button1</button>
    <button onClick={changeCount2}>button2</button>
    </>
  )
}

export default App