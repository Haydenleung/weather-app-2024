interface IWeatherProps {
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
    list: array
}

interface IForecastListProps {
    [index: number]: {
        list: array
    }
}


interface IForecastWeatherProps {
    main: string;
}
