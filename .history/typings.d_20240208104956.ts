interface IWeatherProps {
    date: string;
    main: {
        temp: number;
    }
    caption: string;
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