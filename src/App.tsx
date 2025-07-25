import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import LandingSection from './components/LandingSection/LandingSection';
import VarietySection from './components/VarietySection/VarietySection';
import MostPopular from './components/MostPopular/MostPopular';
import BestProducts from './components/BestProducts/BestProducts';
import BurgerSection from './components/BurgerSection/BurgerSection';
import OtherVarieties from './components/OtherVarieties/OtherVarieties';
import OtherBestProducts from './components/OtherBestProducts/OtherBestProducts';
import VectorSection from './components/VectorSection/VectorSection';
import FeaturedPosts from './components/FeaturedPosts/FeaturedPosts';
import Footer from './components/Footer/Footer';
import { ViewChild, ViewProvider } from './components/ViewContext/ViewContext';

function App() {
  const auth: object = { name: 'Kelechi' };
  return (
    <div className="App">
      <ThemeProvider>
        <ViewProvider>
          <Header auth={auth} />

          <ViewChild id={'heroSection'} delay={700}>
            <LandingSection id={'heroSection'} />
          </ViewChild>

          {/* <LandingSection /> */}

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
            <BurgerSection />
          </div>

          <div style={{ marginTop: 100 }}>
            <OtherVarieties />
          </div>

          <div style={{ marginTop: 100 }}>
            <OtherBestProducts />
          </div>

          <div style={{ marginTop: 100 }}>
            <VectorSection />
          </div>

          <div style={{ marginTop: 100 }}>
            <FeaturedPosts />
          </div>

          <div style={{ marginTop: 100 }}>
            <Footer />
          </div>
        </ViewProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
