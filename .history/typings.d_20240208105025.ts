interface IWeatherProps {
    main: {
        temp: number;
    }
    weather: {
        main: string;
    }
    weather: {
        main: string;
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