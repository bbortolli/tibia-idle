import { createStore, applyMiddleware, compose } from 'redux';
import tokenReducer from './reducers/tokenReducer'
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

const store = createStore(
    tokenReducer,
    {},
    compose(applyMiddleware(...middlewares))
    );

export default store;