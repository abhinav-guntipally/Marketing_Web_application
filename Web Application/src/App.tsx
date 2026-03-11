import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Design } from './components/Design';
import { Performance } from './components/Performance';
import { Comfort } from './components/Comfort';
import { Variants } from './components/Variants';
import { Gallery } from './components/Gallery';
import { Specifications } from './components/Specifications';
import { ComparisonSection } from './components/ComparisonSection';
import { Heritage } from './components/Heritage';
import { OwnerStories } from './components/OwnerStories';
import { Accessories } from './components/Accessories';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Stores } from './components/Stores';
import { TestDrive } from './components/TestDrive';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Design />
      <Performance />
      <Comfort />
      <Variants />
      <Gallery />
      <Specifications />
      <ComparisonSection />
      <Heritage />
      <OwnerStories />
      <Pricing />
      <Accessories />
      <FAQ />
      <Stores />
      <TestDrive />
      <Footer />
    </div>
  );
}

export default App;
