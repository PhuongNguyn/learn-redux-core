import { useSelector } from "react-redux"


const TableUser = () => {
    const userReducer = useSelector((state) => state.userReducer)
    return (
        <div>
            {userReducer.users?.map((user, index) => <p>{index + 1}. {user}</p>)}
        </div>
    )
}

export default TableUser