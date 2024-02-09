
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Container(
    props: { data: IWeatherProps[], date: IDateProps[], fData: IForecastProps[], location: any }
) {

    // const [currentTemp, setCurrentTemp] = useState<number>();
    // const [currentWind, setcurrentWind] = useState<number>();
    // const [currentDate, setcurrentDate] = useState<string>();
    // const [currentMain, setcurrentMain] = useState<string>();
    // const [forcastTemp, setForcastTemp] = useState<number[]>([]);

    const [currentDate, setcurrentDate] = useState<string>();


    const formatDate = (tempDate: string) => {
        tempDate = tempDate?.substring(0, tempDate.search("T"));
        var day = new Date(Date.parse(tempDate)).getDate() + 1;
        var month = new Date(Date.parse(tempDate)).toLocaleString('default', { month: 'long' });
        var year = new Date(Date.parse(tempDate)).getFullYear();
        return (month + " " + day + ", " + year)
    }

    const formatDate2 = (tempDate: string) => {
        var day = new Date(Date.parse(tempDate)).getDate();
        var month = new Date(Date.parse(tempDate)).toLocaleString('default', { month: 'short' });
        var year = new Date(Date.parse(tempDate)).getFullYear();
        return (month + " " + day + ", " + year)
    }

    useEffect(() => {
        // Find Date
        // props.date && props.date.map((item: IDateProps) => {
        //     var tempDate = item.current.lastupdate[0].$.value;
        //     tempDate = tempDate?.substring(0, tempDate.search("T"))
        //     setcurrentDate(tempDate)
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
        <div className={"weatherContainer"}>
            {props.date && return(
            <div className={"today"}>)
                {
                    props.date && props.date.map((item: IDateProps, index: number) => {
                        return (
                            <div key={index} className={"date"}>
                                <div className={"now"}>Current</div>
                                {
                                    item.current.lastupdate && item.current.lastupdate.map((single: IDateExactProps, indexTwo: number) => {
                                        return (
                                            <div key={indexTwo} className={"todayDate"}>
                                                {formatDate(single.$.value)}
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
                            <div key={index} className={"subToday"}>
                                <Image src="/" alt="icon" width={400} height={400} className={"icon"} />
                                < div className={"temp"} > {item.main.temp.toFixed(1)}°C</div>
                                {
                                    item.weather && item.weather.map((single: IWeatherSingleProps, indexTwo: number) => {
                                        return (
                                            <div key={indexTwo} className={"main"}>
                                                {single.main}
                                            </div>
                                        )
                                    })
                                }
                                <div>{item.wind.speed} m/s</div>
                            </div>
                        )
                    })
                }
            </div >
}
            {
                props.fData && props.fData.map((item: IForecastProps, index: number) => {
                    return (
                        <div key={index} className={"forecast"}>
                            {
                                item.list && item.list.map((single: IForecastListProps, indexTwo: number) => {
                                    return (
                                        single.dt_txt.search("00:00:00") > 0 &&
                                        (<div key={indexTwo} className={"subForecast"}>
                                            {single.main.temp.toFixed(1)}<br />
                                            {single.wind.speed}<br />
                                            {formatDate2(single.dt_txt)}
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


        </div >
    )
}