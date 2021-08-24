const INITIAL_STATE = {
    currentUser: null
}


//reducer is just a function that takes two parameters state and action

//payload we just the current user value
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer