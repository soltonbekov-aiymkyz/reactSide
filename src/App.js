// import { useState } from "react"
// import Countdown from "./components/Countdown/Countdown"
// const App = () => {
//   const [Countdown,setCountdown]=useState(20);
//   const [a,setA]=useState(Math.round(Math.random)); 
//   const [b,setB]=useState(Math.round(Math.random));
//   const [c,setC]=useState("?");
// }
// function reset() {
//   setA(Math.round(Math.random() * 50));
//   setB(Math.round(Math.random() * 50));
//   setC("?");
//   setCountdown(20);
// }
// function checkAnswer(){
//   if (a + b == c){
//     reset();
//   }
//   else {
//     alert("No");
//   }
// }
// return (
//   <div className="App">
//     {a} + {b} + {c}
//     <Countdown countdown={countdown}
//      setCountdown={setCountdown} />
//      <input type="text"
//       onChange={({ target })=> setC(target.value)
//       <button onClick ={checkAnswer}>Ok</button>
//   </div>
// )
// }
// export default App


import {useState} from "react"
import Plus from "./components/Countdown/Countdown"
function App() {
  const[plus , setPlus] = useState(20);
  const[a , setA] = useState(Math.round(Math.random()));
  const[b , setB] = useState(Math.round(Math.random()));
  const[c , setC] = useState("?");
  function reset() {
    setA(Math.round(Math.random() * 50));
    setB(Math.round(Math.random() * 50));
    setC("?");
    setPlus(20);
  }
  function CheckAnswer() {
    if(a + b == c){
      reset();
    }
    else{
      alert("No")
    }
  }
  return (
    <div>
      {a} + {b} = {c}
      <Plus plus={plus}
      setPlus = {setPlus} />
      <input type="text"
      onChange = {({target}) => setC(target.value)} />
      <button onClick = {CheckAnswer}>Ok</button>
    </div>
  )
}
export default App;