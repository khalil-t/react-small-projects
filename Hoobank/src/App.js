import './App.css';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./compo";
function App() {
  return (
    <div className='h'>
    
      <div className='one' >
        <Navbar />
      </div>
    

    <div >
      <div >
        <Hero />
      </div>
    </div>
    
    <div >
      <div className="compo">
        <Stats className="Stats"/>
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  );


  
}






export default App;
