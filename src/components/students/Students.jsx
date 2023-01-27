import axios from "axios";
import { useEffect, useState } from 'react'
import "./Students.scss"

export default function Students() {
    const SF = process.env.REACT_APP_SERVER_FOLDER
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await axios.get("https://semillero-api.onrender.com/" + `api/estudiantes/all`)

            setStudents(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                })
            )

        }
        fetchStudents()
    }, [])

    return (
        <div className="students">
            <div className="wrapper">
                <div className="wrapperTop">
                    <div className="title">
                        Estudiantes del Semillero
                    </div>

                    <div className="group">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Buscar" type="search" className="input" />
                    </div>
                </div>

                <table className="tableFields">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cédula</th>
                            <th>Nombre del proyecto</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                </table>

                <div className="scrolledTable">
                    <table>
                        <tbody>
                            {students.map((student) => {
                                return (
                                    <tr >
                                        <td>{student.nombres}</td>
                                        <td>{student.apellidos}</td>
                                        <td>{student.ci}</td>
                                        <td>{student.nombre_proyecto}</td>
                                        <td>{student.estado}</td>
                                    </tr>
                                )

                            })}

                            <tr >
                                paginator
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
}