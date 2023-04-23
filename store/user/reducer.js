

const initialState = {
    users: []
}

export default function userReducer (state = initialState, action) {
    switch(action.type){
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user != action.payload)
            }
        case "DELETE_ALL": 
            return {
                ...state, 
                users: []
            }
        default: 
            return state
    }
}