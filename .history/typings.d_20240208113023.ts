interface IWeatherProps {
    main: {
        temp: number;
    }
    weather: array;
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