import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decreamentWithCheck, increament } from "../app/features/counter/actions";

const Redux = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decreamentWithCheck(1))}>-</button>
            {' '}<span>{count}</span>{' '}
            <button onClick={() => dispatch(increament(1))}>+</button>
        </div>
    )
}

export default Redux;