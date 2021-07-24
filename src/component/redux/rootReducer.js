import { combineReducers} from "redux"
import cakeReducer from "../cake/cakeReducer"
import iceCreameReducer from "../ice-creame/iceReducer"
import userReducer from "../users/userReducer"

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCreame:iceCreameReducer,
    users:userReducer
})

export default rootReducer