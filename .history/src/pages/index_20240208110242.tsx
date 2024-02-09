import Image from "next/image";
import { useState } from 'react';
import Container from "@/components/Container";

export default function Home() {
  var apiKey = "1166e5ad9804e768305a6f5ad6b1e21c"
  var cityName = "london"
  var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  var currentUrlXML = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=xml&appid=${apiKey}`;
  // var forecasrUrl = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}`;



  const [data, setData] = useState<IWeatherProps[]>([]);
  const [date, setDate] = useState<string | null>();


  const GrabInfo = () => {
    fetch(currentUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
    fetch(currentUrlXML)
      .then((res) => {
        return res.text()
      })
      .then((date) => {
        console.log(date);
        setDate(date);
      })
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <button onClick={() => GrabInfo()}>Grab Info</button>
      <Container data={data} />
      {data.map}
    </main>
  );
}
