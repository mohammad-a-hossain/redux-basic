import { BUY_CAKE } from "./CakeTypes"

const initialState ={
    numOfCake:11
}
const cakeReducer =(state =initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
       default: return state
    }
}
export default cakeReducer