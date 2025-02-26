import BestOffer from "@/components/home/bestOffer/BestOffer";
import Hero from "@/components/home/hero/Hero";
import OurProducts from "@/components/home/ourProducts/OurProducts";
import WhatTheySayAndOurGallery from "@/components/home/whatTheySay&ourGallery/WhatTheySayAndOurGallery";

export default function Home() {
  return (
    <div>
      <Hero/>
      <OurProducts/>
      <BestOffer/>
      <WhatTheySayAndOurGallery/>
    </div>
  );
}
