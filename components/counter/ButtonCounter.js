import { decrease, increse } from "@/store/counter/action"
import { useDispatch } from "react-redux"

const ButtonCounter = () => {
    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increse())
    }

    const handleDecrease = () => {
        dispatch(decrease())
    }

    return (
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default ButtonCounter