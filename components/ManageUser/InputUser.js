import { addUser } from "@/store/user/action"
import { useState } from "react"
import { useDispatch } from "react-redux"

const InputUser = () => {
    const dispatch = useDispatch()
    const [username, setUserName] = useState("")

    const handleChangeUsername = (e) => {
        setUserName(e.target.value)
    }

    const handleClickAddUser = () => {
        dispatch(addUser(username))
    }

    return (
        <div style={{padding: '20px'}}>
            <input onChange={handleChangeUsername}/>
            <button onClick={handleClickAddUser}>ADD USER</button>
        </div>
    )
}

export default InputUser