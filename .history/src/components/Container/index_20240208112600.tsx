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
        <>
            {
                props.data && props.data.map(item: IWeatherProps, index: number) => {
                    return (
            <div key={index} style={{ margin: '15px' }}>
                <div>{main.temp}</div>
                <div>{weather.main}</div>
                <div>{weather.main}</div>
            </div>
            )
                })
            }

        </>
    )
}