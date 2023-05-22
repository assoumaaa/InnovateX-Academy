import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Product } from './Product';
import { Modules } from './Modules';
import { AboutUs } from './AboutUs';
import { LandingPage } from './LandingPage';
import { LoginSignUp } from './LoginSignUp';

import { M0 } from '../modules/M0/M0'
import { M1 } from '../modules/M1/M1';
import { M2 } from '../modules/M2/M2';
import { M3 } from '../modules/M3/M3';

import '../sass/App.scss'
import { M4 } from '../modules/M4/M4';
import { M5 } from '../modules/M5/M5';
import { M6 } from '../modules/M6/M6';


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

            <Route path='login' element={<LoginSignUp />} />

            <Route path="/modules" element={<Modules />}>
              <Route path="m0" element={<M0 />} />
              <Route path="m1" element={<M1 />} />
              <Route path="m2" element={<M2 />} />
              <Route path="m3" element={<M3 />} />
              <Route path="m4" element={<M4 />} />
              <Route path="m5" element={<M5 />} />
              <Route path="m6" element={<M6 />} />
            </Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;


