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
                props.data && props.data.map(({
                    date,
                    dscovr_j2000_position,
                    caption: caption2
                }: ICurrentProps, index: number) => {
                    return (
                        <div key={index} style={{ margin: '15px' }}>
                            <div>{date}</div>
                            <div>{caption2}</div>
                            <div>
                                {dscovr_j2000_position.x.toFixed(2)}
                            </div>
                            <div>
                                {dscovr_j2000_position.y.toFixed(2)}
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}