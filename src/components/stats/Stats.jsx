import axios from "axios";
import { useEffect, useState } from 'react'

import "./Stats.scss"
import States from "./components/states/States"
import Areas from "./components/areas/Areas"
import Gender from "./components/gender/Gender"






export default function Stats() {
    const SF = process.env.REACT_APP_SERVER_FOLDER
    const [students, setStudents] = useState([])
    const [chart, setChart] = useState(1)

    useEffect(() => {
        const fetchStudents = async () => {
            const res = await axios.get(SF + `api/estudiantes/all`)

            setStudents(
                res.data.sort((p1, p2) => {
                    return new Date(p2.createdAt) - new Date(p1.createdAt)
                })
            )

        }
        fetchStudents()
    }, [])


    

    return (
        <div className="stats">
            <div className="title">
                <h2>Estadisticas de los Semilleros</h2>
            </div>

            <div className="wrapper">
                <ul>
                    <li onClick={() =>setChart(1)}> Estados</li>
                    <li onClick={() =>setChart(2)}> Porcentaje por Sexo</li>
                    <li onClick={() =>setChart(3)}> Áreas</li>
                </ul>

                {chart===1?<States students={students}/>: "" }
                {chart===2?<Gender students={students}/>: "" }
                {chart===3?<Areas students={students}/>: "" }
                
                
            </div>
        </div>
    );
}