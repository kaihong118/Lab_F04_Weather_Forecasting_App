import React from "react";
import Table from 'react-bootstrap/Table';
import ForecastTableRowClass from "../ForecastTableRowClass/ForecastTableRowClass.tsx";
import {ForecastWeatherData, List} from "../../../data/ForecastWeatherData.ts";

type Props = {
    forecastWeatherData: ForecastWeatherData | undefined
}

export default class ForecastTableClass extends React.Component<Props> {
    constructor(props:Props) {
        super(props);
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="dark" className="align-middle">
                    <thead>
                    <tr className="align-middle">
                        <th>Date</th>
                        <th>Time</th>
                        <th>Temperature (Min/Max)</th>
                        <th>Humidity (%)</th>
                        <th>Weather</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.forecastWeatherData?.list.map((value:List) => (
                        <ForecastTableRowClass forecastWeatherData={value}/>
                    ))}
                    </tbody>
                </Table>
            </>
        )
    }
}