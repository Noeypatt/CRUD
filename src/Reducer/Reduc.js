import numberReducer from './NumberReducer'
import bearReducer from './BearReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    number: numberReducer,
    bears: bearReducer
})
export default rootReducer