"use client";
import HeroSection from '../components/HeroSection';

import Motivation from "@/components/Motivation";
import CardList from "@/components/Cardlist";




const Home = () => {
  return (
    <div>
      <HeroSection />
    
      <CardList/>
      <Motivation/>

    </div>

  );
 
};

export default Home;

