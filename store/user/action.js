
export const addUser = (username) => {
    return {
        type: "ADD_USER",
        payload: username
    }
}

export const deleteUser = (username) => {
    return {
        type: "DELETE_USER",
        payload: username
    }
}