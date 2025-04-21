import { combineReducers } from "redux";
import rootUser from "./reducer/rootUser";
import rootSport from "./reducer/rootSport";
import rootMusic from "./reducer/rootMusic"


const rootReducer = combineReducers({
    user: rootUser,
    sport : rootSport,
    music : rootMusic
})

export default rootReducer;