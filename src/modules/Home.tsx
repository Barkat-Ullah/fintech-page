"use client";

import BlogSection from "./components/BlogSection";
import Feature from "./components/Featured";
import HowItWorks from "./components/HowItWorks";
import IntegrationSection from "./components/Integration";
import Metrics from "./components/Metrix";
import Pricing from "./components/PriceSection";
import MetricAndTestimonials from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Metrics />
      <Feature />
      <HowItWorks />
      <WhyChooseUs />
      <MetricAndTestimonials />
      <Pricing />
      <IntegrationSection />
      <BlogSection />
    </>
  );
};

export default Home;
