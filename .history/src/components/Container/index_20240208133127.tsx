
import { useState, useEffect } from 'react';

export default function Container(
    props: { data: IWeatherProps[], date: IDateProps[], fData: IForecastProps[] }
) {

    const [currentTemp, setCurrentTemp] = useState<number>();
    const [currentWind, setcurrentWind] = useState<number>();
    const [currentDate, setcurrentDate] = useState<string>();
    const [currentMain, setcurrentMain] = useState<string>();
    const [forcastTemp, setForcastTemp] = useState<number[]>([]);

    useEffect(() => {
        // Find Date
        props.date && props.date.map((item: IDateProps) => {
            var tempDate = item.current.lastupdate[0].$.value;
            tempDate = tempDate?.substring(0, tempDate.search("T"))
            setcurrentDate(tempDate)
        })

        // Find Current Weather
        props.data && props.data.map((item: IWeatherProps) => {
            setCurrentTemp(item.main.temp)
            setcurrentWind(item.wind.speed)
            item.weather && item.weather.map((single: IWeatherSingleProps) => {
                setcurrentMain(single.main)
            })
        })
    })


    return (
        <>
            {currentDate}
            {currentTemp?.toFixed(1)}
            {currentMain}
            {currentWind?.toFixed(1)}

            {
                props.fData && props.fData.map((item: IForecastProps) => {
                    return (
                        <div key={0} style={{ margin: '15px' }}>
                            {
                                item.list && item.list.map((single: IForecastListProps, indexTwo: number) => {
                                    return (

                                        <div key={0} >
                                            {/* {
                                                forcastTemp.push(single.main.temp)
                                            }
                                            {console.log(forcastTemp)} */}
                                            {single.main.temp}
                                            {single.wind.speed}
                                            {single.dt_txt}
                                            {
                                                single.weather && single.weather.map((second: IForecastWeatherProps, indexThree: number) => {
                                                    return (
                                                        <div key={0} >
                                                            {second.main}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }

            {/* {
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
            } */}
            {/* {
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
            } */}
        </>
    )
}