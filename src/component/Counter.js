import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, deleteCount } from "../redux/actions";


const Counter = () => {

    const state = useSelector(state => state.count);
    const dispatch = useDispatch();

    return(
        <div>
        <h1>Count : {state}  </h1>
            <button onClick={() => dispatch(addCount())}>ADD</button>
            <button onClick={() => dispatch(deleteCount())}>REDUCE</button>
        </div>
    )
}

export default Counter;