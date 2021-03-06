import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { combineReducers } from 'redux';

import { LoginReducer } from '../components/Login/actions'
import { UserReducer } from '../components/PrivateRoute/actions'


const RootReducer = combineReducers({
    user: UserReducer,
    login: LoginReducer,
})

// add support redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store
export const store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
)

