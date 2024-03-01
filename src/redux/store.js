import { combineReducers } from "redux";
import rootUser from "./reducer/rootUser";


const rootReducer = combineReducers({
    userState: rootUser,

})

export default rootReducer;