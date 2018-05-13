import axios from 'axios';

export function fetchTweets() {
    return function (dispatch) {
        axios.get("http://rest.learncode.academy/api/test123/tweets")
            .then((response) => {
                dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USERS_REJECTED", payload: err})
            })
    }
}

export function addTweet(id, text) {
    return{
        type: 'ADD_TWEET',
        payload: {
            id,
            text,
        },
    }
}
export function upadteTweet(id, text) {
    return{
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        },
    }
}
export function deleteTweet(id) {
    return{
        type: 'delete_TWEET',
        payload: {
            id,
        },
    }
}