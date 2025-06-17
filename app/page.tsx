import React from "react";

import Hero from "@/component/Hero";
import Card from "@/component/card";
import { Info } from "lucide-react";
import InfoSection from "@/component/info-section";
import Information from "@/component/information";
import ContactPic from "@/component/contact-pic";
import Banner from "@/component/banner";

export default function Page() {
  return (
    <>
      <Hero />
      <InfoSection />
      <Information />
      <Card />
      <Banner/>
     

    </>
  );
}
