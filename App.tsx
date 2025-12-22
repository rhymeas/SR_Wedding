import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import LocationDetails from './components/LocationDetails';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import Concierge from './components/Concierge';
import ThingsToDo from './components/ThingsToDo';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-citron-light selection:text-forest">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Events />
        <LocationDetails />
        <ThingsToDo />
        <FAQ />
        <Registry />
        <MapSection />
        <Rsvp />
        <Guestbook />
      </main>
      <Footer />
      <Concierge />
    </div>
  );
};

export default App;