"use client";

import Feature from "./components/Featured";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrix";

const Home = () => {
  return (
    <>
      <Metrics />
      <Feature />
      <HowItWorks />
    </>
  );
};

export default Home;
