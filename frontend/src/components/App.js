import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Product } from './Product';
import { Modules } from './Modules';
import { AboutUs } from './AboutUs';
import { LandingPage } from './LandingPage';
import { LoginSignUp } from './LoginSignUp';
import { Definition } from '../modules/M0/Definition';
import { M0 } from '../modules/M0/M0'
import { M1 } from '../modules/M1/M1';
import { M2 } from '../modules/M2/M2';
import { M3 } from '../modules/M3/M3';

import '../sass/App.scss'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className="sections">

          <Routes>
            <Route path='/' element={
              <>
                <Navbar />
                <LandingPage />
                <AboutUs />
                <Product />
                <Footer />
              </>
            } />
          </Routes>

          <Routes>
            <Route path='login' element={<LoginSignUp />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/m0" element={<M0 />} />
            <Route path="/modules/m1" element={<M1 />} />
            <Route path="/modules/m2" element={<M2 />} /> 
            <Route path="/modules/m3" element={<M3 />} />        
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;


