
// import {useState} from "react"
// import Plus from "./components/Countdown/Countdown"
// function App() {
//   const[plus , setPlus] = useState(20);
//   const[a , setA] = useState(Math.round(Math.random()));
//   const[b , setB] = useState(Math.round(Math.random()));
//   const[c , setC] = useState("?");
//   function reset() {
//     setA(Math.round(Math.random() * 50));
//     setB(Math.round(Math.random() * 50));
//     setC("?");
//     setPlus(20);
//   }
//   function CheckAnswer() {
//     if(a + b == c){
//       reset();
//     }
//     else{
//       alert("No")
//     }
//   }
//   return (
//     <div>
//       {a} + {b} = {c}
//       <Plus plus={plus}
//       setPlus = {setPlus} />
//       <input type="text"
//       onChange = {({target}) => setC(target.value)} />
//       <button onClick = {CheckAnswer}>Ok</button>
//     </div>
//   )
// }
// // export default App;
//import { useState } from "react";
// import Countdown from "./components/Countdown/Countdown";
// const App = () => {
//   const [a, setA] = useState(randomNumber(50));
//   const [b, setB] = useState(randomNumber(50));
//   const [answer, setAnswer] = useState("?");
//   const [countdown, setCountdown] = useState(20);
//   function randomNumber(limit) {
//     return Math.round(Math.random() * limit);
//   }
//   function checkAnswer() {
//     const c = a + b;
//     if (c == answer) {
//       setA(randomNumber(50));
//       setB(randomNumber(50));
//       setAnswer("?");
//       setCountdown(20);
//     }
//     else {
//       alert("No");
//     }
//   }
//   return (
//     <div className="App">
//       {a} + {b} = {answer}
//       <Countdown countdown={countdown} setCountdown={setCountdown} />
//       <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} />
//       <button onClick={() => checkAnswer()}>Ok</button>
//     </div>
//   );
// }
// export default App;





import { useState } from "react";
import Countdown from "./components/Countdown/Countdown";
import Down from "./components/Down/Down"
const App = () => {
  const [a, setA] = useState(randomNumber(50));
  const [b, setB] = useState(randomNumber(50));
  const [m, setM] = useState(randomNumber(50));
  const [n, setN] = useState(randomNumber(50));
  const [c,setC] = useState(randomNumber(50));
  const [answer, setAnswer] = useState("?");
  const [countdown, setCountdown] = useState(5);

  const [down, down] = useState(5);

  function randomNumber(limit) {
    return Math.round(Math.random() * limit);
  }
  function checkAnswer() {
    const c = a + b;

    const l = m * n;


    if (c == answer) {
      setA(randomNumber(50));
      setB(randomNumber(50));
      setAnswer("?");
      setCountdown(5);
    }
    else {
      alert("No");
    }


  }
  let userInput = null;
  if (countdown > 0) {
    userInput = (
      <>
        <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} />
        <button onClick={() => checkAnswer()}>Ok</button>
      </>
    ) 
  }

  return (
    <div className="App">
      {a} + {b} = {answer}

      {m} * {n} = {answer}

      <Countdown countdown={countdown} setCountdown={setCountdown} />
      {userInput}
    </div>
  );
}
export default App;
