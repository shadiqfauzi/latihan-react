const INITIAL_STATE = {
    username: undefined,
    isLoggedIn: false
}

export const logUser = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'logUsername' :
            return {
                ...state,
                username : action.payload
            }
        case 'isLoggedIn' :
            return {
                ...state,
                isLoggedIn : !state.isLoggedIn
            }
        default:
            return INITIAL_STATE
    }
}