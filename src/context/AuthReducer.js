const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                docente: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                docente: action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                docente: null,
                isFetching: false,
                error: true,
            };
        case "ADMINLOGIN_START":
            return {
                ...state,
                admin: null,
                isFetching: true,
                error: false,
            };
        case "ADMINLOGIN_SUCCESS":
            return {
                ...state,
                admin: action.payload,
                isFetching: false,
                error: false,
            };
        case "ADMINLOGIN_FAILURE":
            return {
                ...state,
                admin: null,
                isFetching: false,
                error: true,
            };
        default:
            return state;
    }
};

export default AuthReducer;