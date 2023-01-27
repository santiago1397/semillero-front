import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"


const INITIAL_STATE = {
    docente: JSON.parse(localStorage.getItem("docente")) || null,
    admin: JSON.parse(localStorage.getItem("admin")) || null,
    isFetching: false,
    error: false,
}


export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("docente", JSON.stringify(state.docente))
    }, [state.docente])
    
    useEffect(() => {
        localStorage.setItem("admin", JSON.stringify(state.admin))
    }, [state.admin])

    return (
        <AuthContext.Provider
            value={{
                docente: state.docente,
                admin: state.admin,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}