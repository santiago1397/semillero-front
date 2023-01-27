import { Link } from 'react-router-dom'
import { useRef, useState, useContext } from "react"
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext"
import './EstRegister.scss'

export default function EstRegister() {
    const name = useRef()
    const lastname = useRef()
    const ci = useRef()
    const [dateBirth, setDateBirth] = useState()
    const genero = useRef()
    const phone = useRef()
    const local_phone = useRef()
    const email = useRef()

    const instagram = useRef()
    const tiktok = useRef()
    const facebook = useRef()
    const state = useRef()
    const municipio = useRef()
    const parroquia = useRef()
    const direccion = useRef()

    const institucion = useRef()
    const institutionType = useRef()
    const institutionPrivacy = useRef()
    const año_cursante = useRef()



    const [participacion, setParticipacion] = useState(0)
    const [actividad, setActividad] = useState(0)
    const otraActividad = useRef()

    const nombre_proyecto = useRef(null)
    const descripcion_proyecto = useRef(null)
    const [areaInteres, setAreaInteres] = useState()
    const otraArea = useRef()

    const [datosRepresentante, setDatosRepresentante] = useState(false)

    const SF = process.env.REACT_APP_SERVER_FOLDER
    const [loading, setLoading] = useState(false)
    const { docente } = useContext(AuthContext)

    const cambioRadioArea = e => {
        setAreaInteres(e.target.value);
    }

    const cambioRadioActividad = e => {
        setActividad(e.target.value);
    }

    const cambioRadioParticipacion = e => {
        setParticipacion(e.target.value);
    }

    const mayorDeEdad = e => {
        const newDate = new Date(e.target.value)
        const thisDate = new Date()

        if ((thisDate.getFullYear() - newDate.getFullYear()) < 17) {
            setDatosRepresentante(true);
        } else if ((thisDate.getFullYear() - newDate.getFullYear()) === 17) {
            if (thisDate.getMonth() < newDate.getMonth()) {
                setDatosRepresentante(true)
            } else if (thisDate.getMonth() === newDate.getMonth()) {
                if (thisDate.getDate() <= newDate.getDate()) {
                    setDatosRepresentante(true)
                } else {
                    setDatosRepresentante(false)
                }
            } else {
                setDatosRepresentante(false)
            }
        } else {
            setDatosRepresentante(false);
        }

        setDateBirth(newDate)
    }

    async function HandleSubmit(e) {
        setLoading(true)
        e.preventDefault()

        let tiktokAux
        tiktok.current.value ? tiktokAux = tiktok.current.value : tiktokAux = ""
        let facebookAux
        facebook.current.value ? facebookAux = facebook.current.value : facebookAux = ""
        let instagramAux
        instagram.current.value ? instagramAux = instagram.current.value : instagramAux = ""

        let actividadAux
        actividad ?
            (actividad === "Otro" ?
                actividadAux = otraActividad.current.value :
                actividadAux = actividad) :
            actividadAux = ""

        let nombreProyectoAux
        let descripcionProyectoAux
        if((actividad == "Retos de Ciencia") || (actividad == "Olimpiadas de ciencia") || (actividad == "Festival ciencias en videos")){
            nombre_proyecto.current.value ? nombreProyectoAux = nombre_proyecto.current.value : nombreProyectoAux = ""
            descripcion_proyecto.current.value ? descripcionProyectoAux = descripcion_proyecto.current.value : descripcionProyectoAux = ""
        }else{
            nombreProyectoAux = ""
            descripcionProyectoAux = ""
        }

        let areaInteresAux
        areaInteres ?
            (areaInteres === "Otro" ?
                areaInteresAux = otraArea.current.value :
                areaInteresAux = areaInteres) :
            areaInteresAux = ""



        try {
            await axios.post(SF + "api/estudiantes/", {
                nombres: name.current.value,
                apellidos: lastname.current.value,
                ci: ci.current.value,
                fechaNacimiento: dateBirth,
                genero: genero.current.value,
                celular: phone.current.value,
                telefonoLocal: local_phone.current.value,
                correo: email.current.value,
                instagram: instagramAux,
                tiktok: tiktokAux,
                facebook: facebookAux,
                estado: state.current.value,
                municipio: municipio.current.value,
                parroquia: parroquia.current.value,
                direccion: direccion.current.value,
                institucion: institucion.current.value,
                tipoInstitucion: institutionType.current.value,
                privacidadInstitucion: institutionPrivacy.current.value,
                añoCursante: año_cursante.current.value,
                actividad: actividadAux, //modificar
                nombreProyecto: nombreProyectoAux,
                descripcion: descripcionProyectoAux,
                areaInteres: areaInteresAux, //modificar

            })
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log(err)
        }



    }

    return (
        <div className="semilleros">

            <div className="cintillo">
                <img className="cintilloLogo" src="/assets/Cintillo.png" alt="cintillo" />
                <img className="mincytLogo" src="/assets/Logo_mincyt_2020.png" alt="mincytLogo" />
            </div>

            <div className="mask"></div>
            <div className="formWrapper">
                <div className="titleWrapper">
                    <h1>Registro del Semillero Científico</h1>
                    <img className="semilleroLogo" src="/assets/LogoSemillero.svg" alt="mincytLogo" />
                </div>
                <hr />

                <form className="registerForm" onSubmit={HandleSubmit}>
                    <div className="loginBox">
                        <div className="inputGroup">
                            <div className="labelInput">
                                <label htmlFor="nombres">Nombres:</label>
                                <input id="nombres" name="nombres" size="25" placeholder="nombres" ref={name} required />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="apellidos">Apellidos:</label>
                                <input id="apellidos" name="apellidos" size="25" placeholder="apellidos" ref={lastname} required className="loginInput" />

                            </div>
                            <div className="labelInput">
                                <label htmlFor="cedula">Cédula:</label>
                                <input size="25" placeholder="cedula" ref={ci} required className="loginInput" />

                            </div>
                        </div>
                        <div className="labelInputDate">
                            <label htmlFor="fechaNacimiento" >Fecha de Nacimiento:</label>
                            <input type="date" onChange={mayorDeEdad} min="1990-01-01" />
                        </div>
                        <div className="labelInput">
                            <label htmlFor="genero" >Género:</label>
                            <select ref={genero} name="tipo de institucion">
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>

                        {datosRepresentante ?
                            <div className="inputGroup">
                                <div className="labelInput">
                                    <label htmlFor="nombres">Nombre del Representante:</label>
                                    <input size="25" placeholder="nombre del representante" className="loginInput" />
                                </div>
                                <div className="labelInput">
                                    <label htmlFor="nombres">Cédula del representante:</label>
                                    <input size="25" placeholder="cedula del representante" className="loginInput" />
                                </div>
                            </div> : ""}


                        <div className="inputGroup">
                            <div className="labelInput">
                                <label htmlFor="nombres">Celular:</label>
                                <input ref={phone} placeholder="Celular" size="25" className="loginInput" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Teléfono Local:</label>
                                <input ref={local_phone} placeholder='telefono local' size="25" className="" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Email:</label>
                                <input ref={email} type='email' placeholder='correo' size="25" className="" />
                            </div>
                        </div>


                        <h2>Redes Sociales</h2>

                        <div className="inputGroup">
                            <div className="labelInput">
                                <label htmlFor="nombres">Instagram:</label>
                                <input ref={instagram} size="25" placeholder='@instagram' className="" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Tik Tok:</label>
                                <input ref={tiktok} size="25" placeholder='Tik Tok' className="" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Facebook:</label>
                                <input ref={facebook} size="25" placeholder='Facebook' className="" />
                            </div>
                        </div>

                        <h2>Ubicación</h2>
                        <div className="inputGroup">
                            <div className="labelInput">
                                <label htmlFor="nombres">Estado:</label>
                                <select ref={state} name="Estado" id="Estado"  >
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Anzoátegui">Anzoátegui</option>
                                    <option value="Apure">Apure</option>
                                    <option value="Aragua">Aragua</option>
                                    <option value="Barinas">Barinas</option>
                                    <option value="Bolívar">Bolívar</option>
                                    <option value="Carabobo">Carabobo</option>
                                    <option value="Cojedes">Cojedes</option>
                                    <option value="Delta Amacuro">Delta Amacuro</option>
                                    <option value="Distrito Capital">Distrito Capital</option>
                                    <option value="Falcón">Falcón</option>
                                    <option value="Guárico">Guárico</option>
                                    <option value="Lara">Lara</option>
                                    <option value="Mérida">Mérida</option>
                                    <option value="Miranda">Miranda</option>
                                    <option value="Monagas">Monagas</option>
                                    <option value="Nueva Esparta">Nueva Esparta</option>
                                    <option value="Portuguesa">Portuguesa</option>
                                    <option value="Sucre">Sucre</option>
                                    <option value="Táchira">Táchira</option>
                                    <option value="Trujillo">Trujillo</option>
                                    <option value="Vargas">Vargas</option>
                                    <option value="Yaracuy">Yaracuy</option>
                                    <option value="Zulia">Zulia</option>
                                </select>
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Municipio:</label>
                                <input placeholder="municipio" ref={municipio} required className="loginInput" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Parroquia:</label>
                                <input placeholder="Parroquia" ref={parroquia} required className="loginInput" />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Dirección:</label>
                                <input size="20" placeholder="Direccion" ref={direccion} required className="loginInput" />
                            </div>
                        </div>

                        <h2>Datos Academicos</h2>
                        <div className="inputGroup">
                            <div className="labelInput">
                                <label htmlFor="nombres">Nombre de Institución:</label>
                                <input ref={institucion} type="text" placeholder='nombre de institución' />
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Tipo de Institución:</label>
                                <select ref={institutionType} name="tipo de institucion">
                                    <option value="media">media</option>
                                    <option value="técnica">técnica</option>
                                </select>
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Privacidad de Institución:</label>
                                <select ref={institutionPrivacy} name="tipo de insticion" id="">
                                    <option value="publica">pública</option>
                                    <option value="privada">privada</option>
                                </select>
                            </div>
                            <div className="labelInput">
                                <label htmlFor="nombres">Año cursante:</label>
                                <select ref={año_cursante} name="año cursante" id="">
                                    <option value="1ero">1ero</option>
                                    <option value="2do">2do</option>
                                    <option value="3ero">3ero</option>
                                    <option value="4to">4to</option>
                                    <option value="5to">5to</option>
                                    <option value="6to">6to</option>
                                </select>
                            </div>
                        </div>

                        <div className="questionGroup">
                            <div >
                                <p>¿Tienes alguna participación en actividades asociadas a la ciencia?</p>
                                <div className="answerGroup">
                                    <div className="answer">
                                        <p>Si</p>
                                        <input
                                            onChange={cambioRadioParticipacion}
                                            type="radio"
                                            id="radio1"
                                            value="1"
                                            checked={participacion == 1 ? true : false}
                                        />

                                    </div>
                                    <div className="answer">
                                        <p>No</p>
                                        <input
                                            onChange={cambioRadioParticipacion}
                                            type="radio"
                                            id="radio2"
                                            value="0"
                                            checked={participacion == 0 ? true : false}
                                        />
                                    </div>
                                </div>


                                {participacion == 1 ?
                                    <div className="actividadesGroup">
                                        <p>Selecciona la actividad:</p>
                                        <div className="actividades">
                                            <div className="actividad">
                                                <p>Retos de ciencia</p>
                                                <input
                                                    onChange={cambioRadioActividad}
                                                    type="radio"
                                                    id="radio1"
                                                    value="Retos de Ciencia"
                                                    checked={actividad == "Retos de Ciencia" ? true : false}
                                                />
                                            </div>
                                            <div className="actividad">
                                                <p>Festival ciencias en videos</p>
                                                <input
                                                    onChange={cambioRadioActividad}
                                                    type="radio"
                                                    id="radio2"
                                                    value="Festival ciencias en videos"
                                                    checked={actividad == "Festival ciencias en videos" ? true : false}
                                                />
                                            </div>
                                            <div className="actividad">
                                                <p>Olimpiadas de ciencia</p>
                                                <input
                                                    onChange={cambioRadioActividad}
                                                    type="radio"
                                                    id="radio3"
                                                    value="Olimpiadas de ciencia"
                                                    checked={actividad == "Olimpiadas de ciencia" ? true : false}
                                                />
                                            </div>
                                            <div className="actividad">
                                                <p>Olimpiadas de matemática</p>
                                                <input
                                                    onChange={cambioRadioActividad}
                                                    type="radio"
                                                    id="radio4"
                                                    value="Olimpiadas de matemática"
                                                    checked={actividad == "Olimpiadas de matemática" ? true : false}
                                                />
                                            </div>
                                            <div className="actividad">
                                                <p>Mejor promedio Nacional</p>
                                                <input
                                                    onChange={cambioRadioActividad}
                                                    type="radio"
                                                    id="radio5"
                                                    value="Mejor promedio Nacional"
                                                    checked={actividad == "Mejor promedio Nacional" ? true : false}
                                                />
                                            </div>
                                            <div className="actividad">
                                                <p>Otro</p>
                                                <input
                                                    onChange={cambioRadioActividad}
                                                    type="radio"
                                                    id="radio6"
                                                    value="Otro"
                                                    checked={actividad == "Otro" ? true : false}
                                                />
                                            </div>
                                            {actividad == "Otro" ?
                                                <div className="indique">
                                                    <p>Indique:</p>
                                                    <input ref={otraActividad} type="text" />
                                                </div>
                                                : ""}

                                        </div>

                                    </div> : ""}

                            </div>


                        </div>

                        {((actividad == "Retos de Ciencia") ||
                            (actividad == "Olimpiadas de ciencia") ||
                            (actividad == "Festival ciencias en videos")) ?

                            <div className="projectData">
                                <div className="projectField">
                                    <label htmlFor="nombres">Nombre del proyecto:</label>
                                    <input ref={nombre_proyecto} placeholder="nombre del proyecto" type="text" />
                                </div >

                                <div className="projectField">
                                    <label htmlFor="nombres">Descripción del proyecto:</label>
                                    <textarea rows={6} ref={descripcion_proyecto}  name="descripcion" placeholder="descripción"></textarea>
                                </div>
                            </div>

                            : ""}


                        <div className="actividadesGroup">
                            <p>Áreas de interes por la ciencia con la que te sientes más identificado:</p>
                            <div className="actividades">
                                <div className="actividad">
                                    <p>Matemáticas</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio1"
                                        value="Matemáticas"
                                        checked={areaInteres == "Matemáticas" ? true : false}
                                    />
                                </div>
                                <div className="actividad">
                                    <p>Física o astronomía</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio2"
                                        value="Física o astronomía"
                                        checked={areaInteres == "Física o astronomía" ? true : false}
                                    />
                                </div>
                                <div className="actividad">
                                    <p>Biología o salud</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio2"
                                        value="Biología o salud"
                                        checked={areaInteres == "Biología o salud" ? true : false}
                                    />
                                </div>
                                <div className="actividad">
                                    <p>Informática o computación</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio2"
                                        value="Informática o computación"
                                        checked={areaInteres == "Informática o computación" ? true : false}
                                    />
                                </div>
                                <div className="actividad">
                                    <p>Química</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio2"
                                        value="Química"
                                        checked={areaInteres == "Química" ? true : false}
                                    />
                                </div>
                                <div className="actividad">
                                    <p>Agroalimentaria</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio2"
                                        value="Agroalimentaria"
                                        checked={areaInteres == "Agroalimentaria" ? true : false}
                                    />
                                </div>
                                <div className="actividad">
                                    <p>Otro</p>
                                    <input
                                        onChange={cambioRadioArea}
                                        type="radio"
                                        id="radio2"
                                        value="Otro"
                                        checked={areaInteres == "Otro" ? true : false}
                                    />
                                </div>
                                {areaInteres == "Otro" ?
                                    <div className="indique">
                                        <p>Indique:</p>
                                        <input ref={otraArea} type="text" />
                                    </div> : ""}
                            </div>

                        </div>

                        <button type="submit" className="registerButton">
                            {loading ? (
                                <div className="ping"></div>
                            ) : (
                                "Registrar"
                            )}

                        </button>

                        {/*error? "": ""*/}
                        {/* <Link className="loginRegisterButton" to="/">
                            Log into Account
                        </Link> */}
                    </div>
                </form>
            </div>


        </div>
    );
}