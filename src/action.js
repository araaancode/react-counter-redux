import {INCREMENT,DECREMENT} from "./constants"

const increment = () =>{
    return {
        type:INCREMENT
    }
}

const decrement = () =>{
    return {
        type:DECREMENT
    }
}

export {increment,decrement} 