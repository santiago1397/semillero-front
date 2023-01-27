import React from 'react'
import { Chart } from "react-google-charts";
import "./Gender.scss"


export default function Gender({ students }) {

    const state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < students.length; i++) {
        switch (students[i].genero) {
            case 'Amazonas':
                state[0] += 1;
                break
            case 'Anzoátegui':
                state[1] += 1;
                break
            default:
                break
        }
    }

    const data = [
        ["Gender", "Population"],
        ["Femenino", 112],
        ["Masculino", 40],
    ];

    const options = {
        legend: 'none',
        chartArea:
        {width:'85%',
        height:'85%',},
        backgroundColor: "#ECF0F1",
    };


    return (
        <div className="wrapperRightG">
            <h3>Grafico de Semilleros por Género</h3>
            <div className="wrapperRightBottom">
                <div className="chartWrapper">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />

                </div>
                <div className="dataWrapper">
                    <p className="total">Total: 12345</p>
                    <div className="data">
                        <p>👨‍🦰Masculino: 123</p>
                        <p>👩‍🦰Femenino: 32</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
