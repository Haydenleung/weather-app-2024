interface IWeatherProps {
    cod: string
    main: {
        temp: number;
    }
    weather: array;
    wind: {
        speed: number;
    }
}

interface IWeatherSingleProps {
    main: string;
}

interface IDateProps {
    cod: string
    current: {
        lastupdate: array
    }
}

interface IDateExactProps {
    $: {
        value: string
    }
}

interface IForecastProps {
    cod: string;
    list: array
}

interface IForecastListProps {

    main: {
        temp: number
    }
    weather: array
    wind: {
        speed
    }
    dt_txt: string
}


interface IForecastWeatherProps {
    main: string;
    description: string;
}
