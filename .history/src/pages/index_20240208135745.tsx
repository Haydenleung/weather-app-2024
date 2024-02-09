import Image from "next/image";
import { useState } from 'react';
import { parseString } from 'xml2js';

import Container from "@/components/Container";

export default function Home() {
  var apiKey = "1166e5ad9804e768305a6f5ad6b1e21c"
  var cityName = "london"
  var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  var currentUrlXML = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=xml&appid=${apiKey}`;
  var forecasrUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`;

  const [data, setData] = useState<IWeatherProps[]>([]);
  const [date, setDate] = useState<IDateProps[]>([]);
  const [fData, setFData] = useState<IForecastProps[]>([]);


  const GrabInfo = () => {
    fetch(currentUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        // console.log((data));
        setData([data]);
      })
    fetch(currentUrlXML)
      .then((res) => {
        return res.text()
      })
      .then((date) => {
        parseString(date, (err: any, result: any) => {
          setDate([result]);
          console.log([result])
        })
      })
  }

  const GrabInfo2 = () => {
    fetch(forecasrUrl)
      .then((res) => {
        return res.json()
      })
      .then((fData) => {
        console.log([fData]);
        setFData([fData]);
      })
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <button onClick={() => GrabInfo()}>Grab Info</button>
      <button onClick={() => GrabInfo2()}>Grab Info 2</button>
      <input type="text">123</input>
      <Container data={data} date={date} fData={fData} />

    </main>
  );
}
