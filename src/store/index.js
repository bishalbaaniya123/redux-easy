import {applyMiddleware, createStore} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_START": {
            return {...state, fetching: true};
            break;
        }
        case "FETCH_USERS_ERROR": {
            return {...state, fetching: false, error: action.payload};
            break;
        }
        case "RECEIVED_USERS": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: action.payload,
                users: action.payload
            };
            break;
        }

    }
};

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(reducers, 1, middleware);
store.subscribe(() => {
    console.log("store changed ", store.getState());
});
store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});