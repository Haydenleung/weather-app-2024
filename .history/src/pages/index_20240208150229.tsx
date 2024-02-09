import Image from "next/image";
import { useState } from 'react';
import { parseString } from 'xml2js';

import Container from "@/components/Container";

export default function Home() {

  const [location, setLocation] = useState();

  var apiKey = "1166e5ad9804e768305a6f5ad6b1e21c"
  // var cityName = "london"
  var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  var currentUrlXML = `https://api.openweathermap.org/data/2.5/weather?q=${location}&mode=xml&appid=${apiKey}`;
  var forecasrUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

  const [data, setData] = useState<IWeatherProps[]>([]);
  const [date, setDate] = useState<IDateProps[]>([]);
  const [fData, setFData] = useState<IForecastProps[]>([]);


  const GrabInfo = async () => {
    try {
      await fetch(currentUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData([data]);
        });

      await fetch(currentUrlXML)
        .then((res) => {
          return res.text();
        })
        .then((date) => {
          parseString(date, (err: any, result: any) => {
            setDate([result]);
          });
        });
    } catch (error) {
      setData([])
      setDate([])

    }
  };

  const GrabInfo2 = async () => {
    try {
      await fetch(forecasrUrl)
        .then((res) => {
          return res.json()
        })
        .then((fData) => {
          console.log([fData]);
          setFData([fData]);
        })
    } catch (error) {
      setFData([])
    }
  }

  const handleChange = (event: any) => {
    setLocation(event.target.value);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    GrabInfo()
    GrabInfo2()
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={handleChange} value={location} />
        <button type="submit" />
      </form>
      {/* <button onClick={() => GrabInfo()}>Grab Info</button>
      <button onClick={() => GrabInfo2()}>Grab Info 2</button> */}
      {/* <Container data={data} date={date} fData={fData} location={location} /> */}
      {
        data && data.map((item: IWeatherProps, index: number) => {
          return (
            <>
              {data.cod == "404" ? "" : ""
              }
            </>
          )
        })
      }
    </main >
  );
}
