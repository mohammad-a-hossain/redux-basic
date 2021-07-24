
import { BUY_ICECREAME } from "./IceType"

const initialState = {
    numOFIce :22
}

const iceCreameReducer =(state =initialState,action)=>{
         switch(action.type){
             case BUY_ICECREAME:return{
                 ...state,
                 numOFIce:state.numOFIce -3
             }
             default: return state
         }
}
export default iceCreameReducer


