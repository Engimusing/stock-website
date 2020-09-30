// import {} from '../actions'
let initialState = {
    someValue: "someValue"
}


const SOME_ACTION = "hhh"

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SOME_ACTION:
            
            break;
    
        default:
            return state;
    }
}