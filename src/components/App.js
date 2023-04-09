import { AboutUs } from './AboutUs';
import { Footer } from './Footer';
import { LandingPage } from './LandingPage';
import { Navbar } from './Navbar';
import { Product } from './Product';
import '../sass/App.scss'


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className="sections">
        <LandingPage />
        <AboutUs />
        <Product />
        <Footer />
      </div>
    </div>
  );
}
export default App;


