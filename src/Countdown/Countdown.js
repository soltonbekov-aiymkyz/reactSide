// import { useEffect } from "react"
// import classes from "./Countdown.module.css"

// const Countdown = ({ countdown, setCountdown }) => {
//     useEffect(function () {
//         if (!countdown) return;
//     }

// const internal = setInterval(() => {
//         setCountdown(countdown - 1)
//     }, 1000);

//     return () => clearInterval(internal);
// }, [countdown]);

// return (
//     <div className={classes.Countdown}>{Countdown}</div>
// )
// }
// export default Countdown

// import { useEffect } from "react"
// import classes from "./Countdown.module.css"
// const Countdown = ({ countdown, setCountdown }) => {
//     useEffect(function () {
//         if (!countdown) return;
//     }
//      const internal = setInterval(() => {
//         setCountdown(countdown - 1)
//     }, 1000);

//     return () => clearInterval(internal);
// }, [countdown]);

// return (
//     <div className={classes.Countdown}>{countdown}</div>
// )
// }
// export default Countdown


import {useEffect} from "react";
import classes from "./Countdown.module.css";
const Countdown  = ({countdown, setCountdown})=>{
    useEffect(function(){
        if(!countdown)return;
        const interval = setInterval(() => {
            setCountdown(plus - 1)
        },1000)
    return () => clearInterval(interval);
}, [plus])
return(
    <div className={classes.Countdown}>
      {countdown}
    </div>
)}
export default Countdown;





