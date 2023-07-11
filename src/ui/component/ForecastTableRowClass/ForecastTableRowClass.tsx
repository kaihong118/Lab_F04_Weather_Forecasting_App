import React from "react";
import {List} from "../../../data/ForecastWeatherData.ts";
import * as moment from "moment/moment";

type Props = {
    forecastWeatherData: List
}

export default class ForecastTableRowClass extends React.Component<Props> {
    constructor(props:Props) {
        super(props);
    }

    render() {
        return (
            <>
                <tr>
                    <td>{moment.unix(this.props.forecastWeatherData.dt).format("DD-M-YYYY")}</td>
                    <td>{moment.unix(this.props.forecastWeatherData.dt).format("HH:mm:ss")}</td>
                    <td>{this.props.forecastWeatherData.main.temp_min}/{this.props.forecastWeatherData.main.temp_max}</td>
                    <td>{this.props.forecastWeatherData.main.humidity}%</td>
                    <td><img className={"weather-icon"}
                             src={`https://openweathermap.org/img/wn/${this.props.forecastWeatherData.weather[0].icon}@2x.png`}/>
                    </td>
                </tr>
            </>
        )
    }
}