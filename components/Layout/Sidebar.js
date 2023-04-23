
import { changeTheme } from "@/store/theme/action"
import { useDispatch } from "react-redux"

const Sidebar = () => {
    const dispatch = useDispatch()
    const handleChangeTheme = (theme = "") => {
        dispatch(changeTheme(theme))
    }
    return (
        <div className="sidebar">
            <button onClick={()=>handleChangeTheme("red")}>Red</button>
            <button onClick={()=>handleChangeTheme("orange")}>Orange</button>
            <button onClick={()=>handleChangeTheme("black")}>Black</button>
            <button onClick={()=>handleChangeTheme()}>Default</button>
        </div>
    )
}

export default Sidebar