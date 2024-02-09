
import { useState } from 'react';

export default function Container(
    props: { data: IWeatherProps[], date: any }
) {

    const [currentTemp, setCurrentTemp] = useState<string>();
    const [currentWind, setcurrentWind] = useState<string>();
    const [currentTemp, setcurrentTemp] = useState<string>();
    const [currentTemp, setcurrentTemp] = useState<string>();


    return (
        <>
            {
                console.log(props.data)
            }
            {
                console.log(props.date)
            }
            {
                props.date && props.date.map((item: IDateProps, index: number) => {
                    return (
                        <div key={index} style={{ margin: '15px' }}>
                            {
                                item.current.lastupdate && item.current.lastupdate.map((single: IDateExactProps, indexTwo: number) => {
                                    return (
                                        <div key={indexTwo} >
                                            {single.$.value}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
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