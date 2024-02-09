export default function Container(
    props: { data: IWeatherProps[] }
) {
    if (!props.data?.length) {
        return (
            <div>
                <h1>No data found</h1>
            </div>
        )
    }

    return (
        <div style={{ margin: '15px' }}>
            <div>{props.data.main.temp}</div>
            <div>{weather.main}</div>
            <div>{wind.speed}</div>
        </div>
    )
}