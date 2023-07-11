import React from "react";

type Props = {
    updatedTime: string | undefined
    fetchForecastWeatherData: () => void
}

export default class PageHeadingClass extends React.Component<Props> {
    constructor(props:Props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={"header-container d-flex justify-content-between"}>
                    <h1>5 Day / 3 Hour Forecast</h1>
                    <div className={"d-flex"}>
                        <div>
                            Last Update Time:<br/>
                            {this.props.updatedTime}
                        </div>
                        <img className={"header-refresh-button"}
                             src={"src/assets/refresh.png"}
                             onClick={this.props.fetchForecastWeatherData}/>
                    </div>
                </div>
                <h2 className={"location"}>Hong Kong</h2>
            </>
        )
    }
}