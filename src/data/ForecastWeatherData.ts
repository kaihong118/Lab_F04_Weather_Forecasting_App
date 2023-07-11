export type ForecastWeatherData = {
    list:    List[];
}

export type List = {
    dt:         number;
    main:       MainClass;
    weather:    Weather[];
}

export type MainClass = {
    temp_min:   number;
    temp_max:   number;
    humidity:   number;
}

export type Weather = {
    icon:        string;
}