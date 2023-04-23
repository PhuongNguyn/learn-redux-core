
export const addUser = (username) => {
    return {
        type: "ADD_USER",
        payload: username
    }
}