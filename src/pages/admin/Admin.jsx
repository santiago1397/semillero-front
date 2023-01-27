import { Link,Routes,Route } from 'react-router-dom'
import { loginCall } from "../../apiCalls.js"
import { useRef, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import Stats from "../../components/stats/Stats"
import Students  from "../../components/students/Students"
import Navbar from "../../components/navbar/Navbar"


export default function Admin() {
    const username = useRef()
    const password = useRef()
    const { isFetching, dispatch } = useContext(AuthContext)

    function HandleSubmit(e) {
        e.preventDefault()
        loginCall(
            { username: username.current.value, password: password.current.value },
            dispatch
        )   
    }


    return (
        <div className="admin">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Students />} />
                <Route path="/stats" element={<Stats/>} />
            </Routes>
        </div>
    );
}