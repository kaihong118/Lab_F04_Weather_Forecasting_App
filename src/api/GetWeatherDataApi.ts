import axios, {AxiosResponse} from "axios";
import {ForecastWeatherData} from "../data/ForecastWeatherData.ts";

export default class GetWeatherDataApi {
    static latitude = "22.3370495"
    static longitude = "114.1420691"
    static apiKey = "0983260309cd564b801ed6ed4e535938";

    static apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${GetWeatherDataApi.latitude}&lon=${GetWeatherDataApi.longitude}&units=metric&appid=${GetWeatherDataApi.apiKey}`

    //setForecastWeatherDataState:(data:ForecastWeatherData) => void -> get a function from Class
    static fetchForecastWeatherData = (setForecastWeatherDataState:(data:ForecastWeatherData) => void) => {
        axios.get(GetWeatherDataApi.apiUrl)
            .then((response:AxiosResponse<ForecastWeatherData>) => {
                setForecastWeatherDataState(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

}