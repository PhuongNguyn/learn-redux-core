

const initialState = {
    theme: "",
    // language: "",
    // textColor: ""
}

export default function themeReducer(state = initialState, action){
    switch(action.type){
        case "CHANGE_THEME": 
            return {
                ...initialState,
                theme: action.payload
            }
        default: 
            return state
    }
}