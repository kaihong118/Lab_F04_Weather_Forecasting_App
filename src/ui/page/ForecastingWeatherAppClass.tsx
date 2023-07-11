import "./ForecastingWeatherAppClass.css"
import React from "react";
import PageHeadingClass from "../component/PageHeadingClass/PageHeadingClass.tsx";
import {Container} from "react-bootstrap";
import ForecastTableClass from "../component/ForecastTableClass/ForecastTableClass.tsx";
// import mockData from "./response.json"
import {ForecastWeatherData} from "../../data/ForecastWeatherData.ts";
import GetWeatherDataApi from "../../api/GetWeatherDataApi.ts";
import * as moment from "moment/moment";

type Props = {}

type State = {
    forecastWeatherData: ForecastWeatherData | undefined
    updatedTime: string | undefined
}

export default class ForecastingWeatherAppClass extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            forecastWeatherData: undefined,
            updatedTime: undefined
        }
    }

    setForecastWeatherDataState = (data: ForecastWeatherData) => {
        this.setState({forecastWeatherData: data, updatedTime: moment().format("DD-M-YYYY HH:mm:ss")});
    }

    fetchForecastWeatherData = () => {
        GetWeatherDataApi.fetchForecastWeatherData(this.setForecastWeatherDataState);
    }

    componentDidMount() {
        this.fetchForecastWeatherData()
    }

    render() {
        return (
            <>
                <Container fluid>
                    <PageHeadingClass
                        updatedTime={this.state.updatedTime}
                        fetchForecastWeatherData={this.fetchForecastWeatherData}/>
                    <ForecastTableClass forecastWeatherData={this.state.forecastWeatherData}/>
                </Container>
            </>
        )
    }
}