import Image from "next/image";
import { useState } from 'react';
import { parseString } from 'xml2js';

import Container from "@/components/Container";

export default function Home() {

  const [location, setLocation] = useState<string>("");

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
          if (!res.ok) {
            throw new Error('404 Error');
          }
          return res.json();
        })
        .then((data) => {
          console.log([data]);
          setData([data]);
        });

      await fetch(currentUrlXML)
        .then((res) => {
          if (!res.ok) {
            throw new Error('404 Error');
          }
          return res.text();
        })
        .then((date) => {
          parseString(date, (err: any, result: any) => {
            if (err) {
              throw new Error('404 Error');
            }
            console.log([result]);
            setDate([result]);
          });
        });
      await fetch(forecasrUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error('404 Error');
          }
          return res.json()
        })
        .then((fData) => {
          console.log([fData]);
          setFData([fData]);
        })
    } catch (error) {
      setData([])
      setDate([])
      setFData([])
    }
  };

  const handleChange = (event: any) => {
    setLocation(event.target.value);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    GrabInfo()
  }

  return (
    <div className={"container"} >
      <header>
        <form onSubmit={onFormSubmit} className={"searchForm"}>
          <input type="text" onChange={handleChange} value={location} className={"search"} placeholder={"City, country, or any location..."} />
          <button type="submit" className={"button"} />
        </form>
      </header>
      <Container data={data} date={date} fData={fData} location={location} />
      <footer>
        <p>@ 2024 Hayden Leung</p>
      </footer>
    </div >
  );
}
