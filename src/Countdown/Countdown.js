
// import {useEffect} from "react";
// import classes from "./Countdown.module.css";
// const Countdown  = ({countdown, setCountdown})=>{
//     useEffect(function(){
//         if(!countdown)return;
//         const interval = setInterval(() => {
//             setCountdown(plus - 1)
//         },1000)
//     return () => clearInterval(interval);
// }, [plus])
// return(
//     <div className={classes.Countdown}>
//       {countdown}
//     </div>
// )}
// export default Countdown;



import { useEffect } from "react";
import classes from "./Countdown.module.css";
const Countdown = ({ countdown, setCountdown }) => {
  useEffect(() => {
    if (!countdown) return;
    const interval = setInterval(function() {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);
  return (
    <div className={classes.Countdown}>{countdown}</div>
  );
}
export default Countdown;




