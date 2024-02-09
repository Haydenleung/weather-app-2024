import Image from "next/image";
import { useState } from 'react';
import xml2js from 'xml2js';

// import Container from "@/comoponents/Container";

export default function Home() {
  var apiKey = "1166e5ad9804e768305a6f5ad6b1e21c"
  var cityName = "london"
  var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=xml&appid=${apiKey}`;
  // var forecasrUrl = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}`;


  const [data, setData] = useState<ILocationProps[]>([]);
  const [newData, setNewData] = useState<ILocationProps[]>([]);


  const GrabInfo = () => {
    fetch(geoUrl)
      .then((res) => {
        return res.text()
      })
      .then((data) => {
        console.log(data);
        const newData = parser.parseStringPromise(data)
        // setData(data);
      })
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <button onClick={() => GrabInfo()}>Grab Info</button>
      {/* <Container data={data} /> */}
    </main>
  );
}
