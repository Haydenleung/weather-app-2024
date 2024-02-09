export default function Container(
    props: { data: IWeatherProps[], date: any }
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
                console.log(props.date)

            }
            {
                props.data && props.data.map((item: IWeatherProps, index: number) => {
                    return (
                        <div key={index} style={{ margin: '15px' }}>
                            <div>{item.main.temp}</div>
                            {
                                item.weather && item.weather.map((single: IWeatherSingleProps, indexTwo: number) => {
                                    return (
                                        <div key={indexTwo} >
                                            {single.main}
                                        </div>
                                    )
                                })
                            }
                            <div>{item.weather.main}</div>
                            <div>{item.wind.speed}</div>
                        </div>
                    )
                })
            }
        </>
    )
}