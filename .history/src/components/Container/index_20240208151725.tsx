
import { useState, useEffect } from 'react';

export default function Container(
    props: { data: IWeatherProps[], date: IDateProps[], fData: IForecastProps[], location: any }
) {

    // const [currentTemp, setCurrentTemp] = useState<number>();
    // const [currentWind, setcurrentWind] = useState<number>();
    // const [currentDate, setcurrentDate] = useState<string>();
    // const [currentMain, setcurrentMain] = useState<string>();
    // const [forcastTemp, setForcastTemp] = useState<number[]>([]);

    const [currentDate, setcurrentDate] = useState<string>();

    useEffect(() => {
        // Find Date
        // props.date && props.date.map((item: IDateProps) => {
        //     // var tempDate = item.current.lastupdate[0].$.value;
        //     // tempDate = tempDate?.substring(0, tempDate.search("T"))
        //     // setcurrentDate(tempDate)
        // })

        // // Find Current Weather
        // props.data && props.data.map((item: IWeatherProps) => {
        //     // setCurrentTemp(item.main.temp)
        //     // setcurrentWind(item.wind.speed)
        //     // item.weather && item.weather.map((single: IWeatherSingleProps) => {
        //     //     setcurrentMain(single.main)
        //     // })
        // })

        // setForcastTemp([])
        // props.fData && props.fData.map((item: IForecastProps) => {
        //     item.list && item.list.map((single: IForecastListProps) => {
        //         setForcastTemp([...forcastTemp, single.main.temp])
        //         console.log(forcastTemp)
        //         single.wind.speed
        //         single.dt_txt
        //         single.weather && single.weather.map((second: IForecastWeatherProps) => {
        //             { second.main }
        //         })
        //     })

        // })
    })


    return (
        <>
            {
                props.data && props.data.map((item: IWeatherProps, index: number) => {
                    return (
                        <div key={index} style={{ margin: '15px' }}>
                            <div>{item.main.temp.toFixed(1)}</div>
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
            {
                props.date && props.date.map((item: IDateProps, index: number) => {
                    return (
                        <div key={index} style={{ margin: '15px' }}>
                            {
                                item.current.lastupdate && item.current.lastupdate.map((single: IDateExactProps, indexTwo: number) => {


                                    setcurrentDate(tempDate = (item.current.lastupdate[0].$.value?.substring(0, item.current.lastupdate[0].$.value.search("T"))))
                                    // return (
                                    //     <div key={indexTwo} >
                                    //         {single.$.value}
                                    //     </div>
                                    // )
                                    currentDate
                                })
                            }
                        </div>
                    )
                })
            }

            {
                props.fData && props.fData.map((item: IForecastProps, index: number) => {
                    return (
                        <div key={index} style={{ margin: '15px' }}>
                            {
                                item.list && item.list.map((single: IForecastListProps, indexTwo: number) => {
                                    return (
                                        single.dt_txt.search("00:00:00") > 0 &&
                                        (<div key={indexTwo} >
                                            {single.main.temp.toFixed(1)}<br />
                                            {single.wind.speed}<br />
                                            {single.dt_txt}
                                            {
                                                single.weather && single.weather.map((second: IForecastWeatherProps, indexThree: number) => {
                                                    return (
                                                        <div key={indexThree} >
                                                            {second.main}
                                                            {second.description}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>)
                                    )
                                })
                            }
                        </div>
                    )
                })
            }


        </>
    )
}