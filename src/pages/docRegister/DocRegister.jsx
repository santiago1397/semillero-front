import './DocRegister.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from "react"
import axios from 'axios'


export default function DocRegister() {
    const navigate = useNavigate()
    const name = useRef()
    const lastname = useRef()
    const ci = useRef()
    const email = useRef()
    const state = useRef()
    const municipio = useRef()
    const institution = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const SF = process.env.REACT_APP_SERVER_FOLDER
    const [loading, setLoading] = useState(false)

    async function HandleSubmit(e) {
        setLoading(true)
        e.preventDefault()

        if (password.current.value !== confirmPassword.current.value) {
            password.current.setCustomValidity("Password don't match 😣")
        } else {
            try {
                await axios.post(SF + "api/auth/register", {
                    nombre: name.current.value,
                    apellido: lastname.current.value,
                    ci: ci.current.value,
                    correo: email.current.value,
                    contraseña: password.current.value,
                    estado: state.current.value,
                    municipio: municipio.current.value,
                    institucion: institution.current.value,
                })
                setLoading(false)
                navigate('/')
            } catch (err) {
                setLoading(false)
                console.log(err)
            }

        }

    }

    return (
        <div className="register">
            <div className="registerLeft">

            </div>
            <div className="registerRight">
                <div className="registerRightTop">
                    <img src="/assets/LogoSemillero.png" alt="MDN" />
                    <h2 className="loginLogo">Registrarse </h2>
                    {/* <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span> */}
                </div>
                <form className="registerRightCenter" onSubmit={HandleSubmit}>
                    <div className="fieldsWrapper">
                        <div className="section">

                            <div className="infoFields">
                                <label for="nombre">Nombre:</label>
                                <input placeholder="nombre" id="nombre" ref={name} required className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="apellido">Apellido:</label>
                                <input placeholder="apellido" id="apellido" ref={lastname} required className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="cedula">Cédula:</label>
                                <input placeholder="ci" id="cedula" ref={ci} required className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="correo">Correo:</label>
                                <input placeholder="correo" id="correo" ref={email} required className="loginInput" />
                            </div>
                        </div>

                        <div className="section">
                            <div className="infoFields">
                                <label for="contraseña">Contraseña:</label>
                                <input placeholder="contraseña" id="contraseña" type="password" ref={password} required className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="confirmarContraseña">Confirmar Contraseña:</label>
                                <input placeholder="confirmar contraseña" id="confirmarContraseña" type="password" ref={confirmPassword} required className="loginInput" />
                            </div>
                        </div>

                        <div className="section">
                            <div className="infoFields">
                                <label for="estado">Estado:</label>
                                <input placeholder="estado" id="estado" ref={state} required className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="municipio">Municipio:</label>
                                <input placeholder="municipio" id="municipio" ref={municipio} required className="loginInput" />
                            </div>
                            <div className="infoFields">
                                <label for="institucion">Institución:</label>
                                <input placeholder="institucion" id="institucion" ref={institution} required className="loginInput" />
                            </div>
                        </div>
                    </div>

                    <div className="bottomWrapper">
                        <button type="submit" className="loginButton">
                            {loading ? (
                                <div className="ping"></div>
                            ) : (
                                "Registrar"
                            )}

                        </button>
                        <p>
                            Ya estas registrado? &nbsp;
                            <Link className="registerLoginButton" to="/">
                                Ingresa aqui
                            </Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
}