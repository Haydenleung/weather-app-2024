
import { useState, useEffect } from 'react';

export default function Container(
    props: { data: IWeatherProps[], date: any }
) {

    const [currentTemp, setCurrentTemp] = useState<string>();
    const [currentWind, setcurrentWind] = useState<string>();
    const [currentDate, setcurrentDate] = useState<string>();
    const [currentMain, setcurrentMain] = useState<string>();


    useEffect(() => {
        // Find Date
        props.date && props.date.map((item: IDateProps, index: number) => {
            var tempDate = item.current.lastupdate[0].$.value;
            tempDate = tempDate?.substring(0, 10)
            setcurrentDate(tempDate)
        })
        setcurrentDate(currentDate?.substring(0, currentDate.search("T")))
    })



    return (
        <>
            {/* {
                console.log(props.data)
            }
            {
                console.log(props.date)
            } */}
            {
                currentDate
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