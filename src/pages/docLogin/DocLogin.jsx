import { Link } from 'react-router-dom'
import { loginCall } from "../../apiCalls.js"
import { useRef, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import './DocLogin.scss'

export default function DocLogin() {
    const email = useRef()
    const password = useRef()
    const { isFetching, dispatch } = useContext(AuthContext)

    function HandleSubmit(e) {
        e.preventDefault()
        loginCall(
            { correo: email.current.value, contraseña: password.current.value },
            dispatch
        )

    }


    return (
        <div className="login">
            <div className="loginLeft">
                <div className="leftWrapper">
                    <div className="loginTop">
                        <img src="/assets/LogoSemillero.png" alt="MDN" />
                        <h2 className="loginLogo">Ingresa como docente</h2>
                        {/* <span className="loginDesc">
                            Connect with friends and the world around you on SocialApp.
                        </span> */}
                        <hr />
                    </div>
                    <form className="loginCenter" onSubmit={HandleSubmit}>
                        <div className="loginBox">
                            <div className="infoFields">
                                <label for="correo">Correo:</label>
                                <input placeholder="ejemplo@gmail.com" id="correo" required ref={email} className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="contraseña">Contraseña:</label>
                                <input placeholder="*contraseña*" id="contraseña" type="password" required ref={password} className="loginInput" />
                            </div>
                            <div className="centerBottom">
                                <button type="submit" className="loginButton" disabled={isFetching}>
                                    {isFetching ? (
                                        <div className="ping"></div>
                                    ) : (
                                        "Ingresar"
                                    )}
                                </button>
                                <div className="createAccount">
                                    <span className="loginForgot">No estas Registrado? </span>
                                    <Link className="loginRegisterButton" to="/register">
                                        Registrate Aqui
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="loginRight">

            </div>
        </div>
    );
}