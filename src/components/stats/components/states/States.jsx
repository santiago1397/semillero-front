import React from 'react'
import { Chart } from "react-google-charts";
import "./States.scss"


export const options = {
    displayMode: "regions",
    resolution: "provinces",
    region: "VE", // Venezuela
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
};

export default function States({students}) {

    const state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < students.length; i++) {
        switch (students[i].estado) {
            case 'Amazonas':
                state[0] += 1;
                break
            case 'Anzoátegui':
                state[1] += 1;
                break
            case 'Apure':
                state[2] += 1;
                break
            case 'Aragua':
                state[3] += 1;
                break
            case 'Barinas':
                state[4] += 1;
                break
            case 'Bolívar':
                state[5] += 1;
                break
            case 'Carabobo':
                state[6] += 1;
                break
            case 'Cojedes':
                state[7] += 1;
                break
            case 'Delta Amacuro':
                state[8] += 1;
                break
            case 'Distrito Capital':
                state[9] += 1;
                break
            case 'Falcón':
                state[10] += 1;
                break
            case 'Guárico':
                state[11] += 1;
                break
            case 'Vargas':
                state[12] += 1;
                break
            case 'Lara':
                state[13] += 1;
                break
            case 'Mérida':
                state[14] += 1;
                break
            case 'Miranda':
                state[15] += 1;
                break
            case 'Monagas':
                state[16] += 1;
                break
            case 'Nueva Esparta':
                state[17] += 1;
                break
            case 'Portuguesa':
                state[18] += 1;
                break
            case 'Sucre':
                state[19] += 1;
                break
            case 'Táchira':
                state[20] += 1;
                break
            case 'Trujillo':
                state[21] += 1;
                break
            case 'Vargas':
                state[22] += 1;
                break
            case 'Yaracuy':
                state[23] += 1;
                break
            case 'Zulia':
                state[24] += 1;
                break
            default:
                break
        }
    }

    const data = [
        ["State", "Population"],
        ["Amazonas", state[0]],
        ["Anzoátegui", state[1]],
        ["Apure", state[2]],
        ["Aragua", state[3]],
        ["Barinas", state[4]],
        ["Bolívar", state[5]],
        ["Carabobo", state[6]],
        ["Cojedes", state[7]],
        ["Delta Amacuro", state[8]],
        ["Distrito Federal", state[9]],
        ["Falcón", state[10]],
        ["Guárico", state[11]],
        ["Vargas", state[12]],
        ["Lara", state[13]],
        ["Mérida", state[14]],
        ["Miranda", state[15]],
        ["Monagas", state[16]],
        ["Nueva Esparta", state[17]],
        ["Portuguesa", state[18]],
        ["Sucre", state[19]],
        ["Táchira", state[20]],
        ["Trujillo", state[21]],
        ["Yaracuy", state[22]],
        ["Zulia", state[23]],
    ];


    return (
        <div className="wrapperRight">
            <h3>Grafico de Semilleros por Estados</h3>
            <div className="wrapperRightBottom">
                <div className="chartWrapper">
                    <Chart
                        chartType="GeoChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />

                </div>
                <div className="dataWrapper">
                    <p className="total">Total: 12345</p>
                    <div className="data">
                        <p>Amazonas: {state[0]}</p>
                        <p>Anzoátegui: {state[1]}</p>
                        <p>Apure: {state[2]}</p>
                        <p>Aragua: {state[3]}</p>
                        <p>Barinas: {state[4]}</p>
                        <p>Bolívar: {state[5]}</p>
                        <p>Carabobo: {state[6]}</p>
                        <p>Cojedes: {state[7]}</p>
                        <p>Delta Amacuro: {state[8]}</p>
                        <p>Distrito Federal: {state[9]}</p>
                        <p>Falcón: {state[10]}</p>
                        <p>Guárico: {state[11]}</p>
                        <p>Vargas: {state[12]}</p>
                        <p>Lara: {state[13]}</p>
                        <p>Mérida: {state[14]}</p>
                        <p>Miranda: {state[15]}</p>
                        <p>Monagas: {state[16]}</p>
                        <p>Nueva Esparta: {state[17]}</p>
                        <p>Portuguesa: {state[18]}</p>
                        <p>Sucre: {state[19]}</p>
                        <p>Táchira: {state[20]}</p>
                        <p>Trujillo: {state[21]}</p>
                        <p>Yaracuy: {state[22]}</p>
                        <p>Zulia: {state[23]}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
