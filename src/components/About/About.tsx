import React from 'react';
import { ViewChild } from '../ViewContext/ViewContext';
import BestProducts from '../BestProducts/BestProducts';
import BurgerSection from '../BurgerSection/BurgerSection';
import OtherVarieties from '../OtherVarieties/OtherVarieties';
import OtherBestProducts from '../OtherBestProducts/OtherBestProducts';

export default function About() {
  return (
    <div>
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
    </div>
  );
}
