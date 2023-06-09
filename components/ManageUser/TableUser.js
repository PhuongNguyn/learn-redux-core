import { deleteAllUser, deleteUser } from "@/store/user/action"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const TableUser = () => {
    const dispatch = useDispatch()
    const userReducer = useSelector((state) => state.userReducer)

    const handleDeleteUser = (username) => {
        dispatch(deleteUser(username))
    }

    const handleDeleteAllUser = () => {
        dispatch(deleteAllUser())
    }

    return (
        <div>
            <button onClick={handleDeleteAllUser}>Delete All</button>
            {userReducer.users?.map((user, index) => <p>{index + 1}. {user} <button onClick={()=>handleDeleteUser(user)}>delete user</button></p>)}
        </div>
    )
}

export default TableUser