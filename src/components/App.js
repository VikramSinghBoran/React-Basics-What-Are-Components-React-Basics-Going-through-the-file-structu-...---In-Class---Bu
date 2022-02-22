import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  // const [flag,setFlag] = useState(true);
  // const  showP = (prevFlag)=>{
  //   if(prevFlag == true){
  //     setFlag(false);
  //     console.log(flag);
  //   }
  //   console.log(typeof prevFlag);
  // }
  const [content,setContent] = useState(<p></p>);
  
  const handleClick = ()=>{
    setContent(<p id="para">"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>);
  }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      {content}
      <button id="click" onClick={handleClick}>Click</button>
      
      {/* {content} */}
    </div>
  );
}

/*

const [flag,setFlag] = useState(true);

  showP = (prevFlag)=>{
    if(prevFlag === true){
      setFlag(false);
    }
    // else{
    //   setFlag(true);
    // }
  }
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={(prevFlag)=>{
        return showP(prevFlag);
      }}>Click</button>
      {prevFlag?<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:<></>}

    </div>
  );

*/


export default App;
