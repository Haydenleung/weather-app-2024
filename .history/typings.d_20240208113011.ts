interface IWeatherProps {
    main: {
        temp: number;
    }
    weather: object;
    wind: {
        speed: number;
    }
}

interface IForecastProps {
    date: string;
    dscovr_j2000_position: {
        x: number;
        y: number;
        z: number;
    }
    caption: string;
}