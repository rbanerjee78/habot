import './App.css';
import CitySection from './components/citysection';
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/herosection';
import HowItWorksSection from './components/howitworkssection';
import RequirementsSection from './components/requirementsection';
import SupplierSection from './components/suppliersection';


function App() {  
  return (
   <>
    
      <Header />
      <HeroSection />
      <CitySection />
      <RequirementsSection />
      <SupplierSection />
      <HowItWorksSection />
      <Footer />
    
   </>
  );
}

export default App;
