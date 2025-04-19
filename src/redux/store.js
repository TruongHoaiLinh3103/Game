import { combineReducers } from "redux";
import rootUser from "./reducer/rootUser";
import rootSport from "./reducer/rootSport";


const rootReducer = combineReducers({
    user: rootUser,
    sport : rootSport
})

export default rootReducer;