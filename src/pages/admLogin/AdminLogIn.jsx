import { adminloginCall } from "../../apiCalls.js"
import { useRef, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./AdminLogIn.scss"

export default function AdminLogIn() {
    const username = useRef()
    const password = useRef()
    const { isFetching, dispatch } = useContext(AuthContext)

    function HandleSubmit(e) {
        e.preventDefault()
        adminloginCall(
            { username: username.current.value, password: password.current.value },
            dispatch
        )
    }


    return (
        <div className="aLogin">
            <div className="aloginWrapper">
                <div className="mask"></div>

                <div className="imgWrapper">
                    <img src="/assets/LogoSemillero.png" alt="MDN" />
                </div>


                <h3 className="loginLogo">ADMIN LOGIN</h3>

                <form className="loginFields" onSubmit={HandleSubmit}>
                    <div className="loginFieldsWrapper">
                        <div className="group">
                            <input required ref={username} className="input" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Usuario</label>
                        </div>
                        <div className="group">
                            <input type="password" required ref={password} className="input" />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Contraseña</label>
                        </div>

                        <div className="loginButtonWrapper">

                            <button type="submit" className="loginButton" disabled={isFetching}>
                                {isFetching ? (
                                    <div className="ping"></div>
                                ) : (
                                    "Log in"
                                )}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}