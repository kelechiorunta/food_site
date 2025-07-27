import React from 'react';
import LandingSection from '../LandingSection/LandingSection';
import VarietySection from '../VarietySection/VarietySection';
import MostPopular from '../MostPopular/MostPopular';
import BestProducts from '../BestProducts/BestProducts';
import BurgerSection from '../BurgerSection/BurgerSection';
import OtherVarieties from '../OtherVarieties/OtherVarieties';
import OtherBestProducts from '../OtherBestProducts/OtherBestProducts';
import VectorSection from '../VectorSection/VectorSection';
import FeaturedPosts from '../FeaturedPosts/FeaturedPosts';
import { ViewChild } from '../ViewContext/ViewContext';

const Home: React.FC = () => {
  return (
    <div>
      <ViewChild id={'heroSection'} delay={700}>
        <LandingSection id={'heroSection'} />
      </ViewChild>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'varietySection'} delay={500}>
          <VarietySection id={'varietySection'} />
        </ViewChild>
      </div>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'mostPopular'} delay={900}>
          <MostPopular id={'mostPopular'} />
        </ViewChild>
      </div>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'bestProducts'} delay={900}>
          <BestProducts id={'bestProducts'} />
        </ViewChild>
      </div>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'burgerSection'} delay={700}>
          <BurgerSection id={'burgerSection'} />
        </ViewChild>
      </div>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'otherVarieties'} delay={500}>
          <OtherVarieties id={'otherVarieties'} />
        </ViewChild>
      </div>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'otherBestProducts'} delay={500}>
          <OtherBestProducts id={'otherBestProducts'} />
        </ViewChild>
      </div>

      <div style={{ marginTop: 100 }}>
        <VectorSection />
      </div>

      <div style={{ marginTop: 100 }}>
        <ViewChild id={'featuredPosts'} delay={500}>
          <FeaturedPosts id={'featuredPosts'} />
        </ViewChild>
      </div>
    </div>
  );
};

export default Home;
