export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: [{
            name: "Will",
            age: 34,
        },{
            name: "Bishal",
            age: 3115,
        }, {
            name: "",
            age: 3335,
        }, {
            name: "Bill",
            age: 4335,
        }]
    }
}

export function setUserName(name) {
    return {
        type: "SET_USER_NAME",
        payload: name
    }
}

export function setUserAge(age) {
    return {
        type: "SET_USER_AGE",
        payload: age
    }
}

export function funFunction() {
    return {
        type: "FUN_FUNCTION",
    }
}
