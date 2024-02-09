
import { useState, useEffect } from 'react';
import Image from 'next/image';
import sun from "../../../../icons/sun.webp"
import rain from "../../../../icons/rain.webp"
import cloud from "../../../../icons/cloud.webp"
import snow from "../../../../icons/snow.webp"
import mist from "../../../../icons/mist.webp"
import thunder from "../../../../icons/thunderstorm.webp"

export default function Container(
    props: { data: IWeatherProps[], date: IDateProps[], fData: IForecastProps[], location: string }
) {

    const [currentDate, setcurrentDate] = useState<string>();

    const formatDate = (tempDate: string) => {
        var day = new Date(tempDate).getDate();
        var month = new Date(tempDate).toLocaleString('default', { month: 'long' });
        var year = new Date(tempDate).getFullYear();
        return (month + " " + day + ", " + year)
    }

    const formatDate2 = (tempDate: string) => {
        var day = new Date(Date.parse(tempDate)).getDate();
        var month = new Date(Date.parse(tempDate)).toLocaleString('default', { month: 'short' });
        var year = new Date(Date.parse(tempDate)).getFullYear();
        return (month + " " + day + ", " + year)
    }

    const selectIcon = (main: string) => {
        switch (main) {
            case 'Clear':
                return sun
            case 'Clouds':
                return cloud
            case 'Snow	':
                return snow
            case 'Rain':
                return rain
            case 'Thunderstorm':
                return thunder
            case 'Drizzle':
                return rain
            default:
                return mist
        }
    }

    return (
        <div className={"weatherContainer"}>
            {
                props.date?.length !== 0 &&
                <div className={"today"}>
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
                                    {
                                        item.weather && item.weather.map((single: IWeatherSingleProps, indexTwo: number) => {
                                            return (
                                                <Image src={selectIcon(single.main)} alt="icon" width={400} height={400} className={"icon"} />
                                            )
                                        })
                                    }
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
                                    <div className={"wind"}>Wind Speed: {item.wind.speed.toFixed(1)} m/s</div>
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
                                            <div>
                                                <div className={"fDate"}>{formatDate2(single.dt_txt)}</div>
                                                {
                                                    single.weather && single.weather.map((second: IForecastWeatherProps, indexThree: number) => {
                                                        return (
                                                            <div key={indexThree} className={"fMain"} >
                                                                {second.main}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            {/* <Image src="/" alt="icon" width={80} height={80} className={"iconS"} /> */}
                                            {
                                                single.weather && single.weather.map((second: IForecastWeatherProps, indexThree: number) => {
                                                    return (
                                                        <Image src={selectIcon(second.main)} alt="icon" width={80} height={80} className={"iconS"} />
                                                    )
                                                })
                                            }
                                            <div className={"fTemp"}>{single.main.temp.toFixed(1)}°C</div>
                                            <div className={"fContent"}>
                                                <div className={"fWind"}>Wind Speed: {single.wind.speed.toFixed(1)} m/s</div>
                                                {
                                                    single.weather && single.weather.map((second: IForecastWeatherProps, indexThree: number) => {
                                                        return (
                                                            <div key={indexThree} className={"fDesc"} >
                                                                {second.description}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
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