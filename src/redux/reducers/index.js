import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import newsReducer from './news'

const reducers = {news: newsReducer}
const rootReducer = combineReducers({...reducers, routing: routerReducer})

export default rootReducer