import { AboutUs } from './AboutUs';
import { LandingPage } from './LandingPage';
import { Navbar } from './Navbar';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className="sections">
        <LandingPage />
        <AboutUs />
      </div>
    </div>
  );
}
export default App;


