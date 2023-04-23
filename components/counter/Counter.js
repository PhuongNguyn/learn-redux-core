import { useSelector } from "react-redux"

const Counter = () => {
    const counterReducer = useSelector((state) => state.counterReducer)
    return (
        <div>
            {counterReducer.count}
        </div>
    )
}

export default Counter