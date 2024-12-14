import React from 'react';
import HeroSection from '../components/HeroSection';
import KeyFeatures from '../components/KeyFeatures';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';
import Action from '../components/Action'

export const Home = () => {
    return (
      <>
        <HeroSection/>
        <WhyChooseUs/>
        <KeyFeatures/>
        <Testimonial/> 
        <Action/>        
        </>
      );
    };

