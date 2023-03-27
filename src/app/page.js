"use client";

import { Inter } from "next/font/google";
import Navbar from "../components/Navbar.jsx";
import Body from "@/components/Body.jsx";
import Data from "@/components/Data";
import "../app/globals.css";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setCopyData(res);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <main className={inter.className}>
      <Navbar />
      <Body copyData={copyData} setCopyData={setCopyData} data={data} />
      <Data copyData={copyData} />
    </main>
  );
}
