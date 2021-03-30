import { useEffect } from "react";
import classes from "./Down.module.css"
const Down =({ Down, setDown }) => {
    useEffect(function(){
        if (!Down) return;
    const internal = setInterval(()=> {
        setDown(down - 1);
    }, 1000);
    return () => clearInterval(internal);
    }, [down]);
    return(
        <div className={classes.Down}>{down}</div>
    );
}
export default Down;