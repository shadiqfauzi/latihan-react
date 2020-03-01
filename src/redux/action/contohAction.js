// Action Creator => adalah function yang me return sebuah object yaitu action itu sendiri

export const logUsername = (username) => {
    return{
        type: 'logUsername',
        payload: username 
    }
    // ini action
}

export const isLoggedIn = () => {
    return{
        type: 'isLoggedIn'
    }
}