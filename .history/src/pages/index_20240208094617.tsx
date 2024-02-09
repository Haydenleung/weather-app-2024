import Image from "next/image";
import { useState } from 'react';
// import Container from "@/comoponents/Container";

export default function Home() {
  var apiKey = "xAftGummKLWyvYepskUqT9GhmrAlsSeBb6OsaSaL"
  var url = `https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${apiKey}`;

  const [data, setData] = useState<ICurrentProps[]>([]);

  const GrabInfo = () => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <button onClick={() => GrabInfo()}>Grab Info</button>
      <Container data={data} />
    </main>
  );
}
