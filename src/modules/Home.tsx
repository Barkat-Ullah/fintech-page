"use client";

import Feature from "./components/Featured";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrix";
import Pricing from "./components/PriceSection";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Metrics />
      <Feature />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
    </>
  );
};

export default Home;
