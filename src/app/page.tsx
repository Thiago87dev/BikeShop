import BestOffer from "@/components/home/bestOffer/BestOffer";
import Hero from "@/components/home/hero/Hero";
import OurGallery from "@/components/home/ourGallery/OurGallery";
import OurProducts from "@/components/home/ourProducts/OurProducts";
import SaleUpTo from "@/components/home/saleUpTo/SaleUpTo";
import WhatTheySayAndOurGallery from "@/components/home/whatTheySay&ourGallery/WhatTheySayAndOurGallery";

export default function Home() {
  return (
    <div>
      <Hero/>
      <OurProducts/>
      <BestOffer/>
      <WhatTheySayAndOurGallery/>
      <OurGallery/>
      <SaleUpTo/>
    </div>
  );
}
