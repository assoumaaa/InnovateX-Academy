import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { Footer } from './Footer';
import { LandingPage } from './LandingPage';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { Modules } from './Modules';
import { LoginSignUp } from './LoginSignUp';
import '../sass/App.scss'
import { M0 } from '../modules/M0';
import { M1 } from '../modules/M1';


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
            <Route path="/modules/m0" element={
              <>
                <Modules />
                <M0 />
              </>
            } />
            <Route path="/modules/m1" element={
              <>
                <Modules />
                <M1 />
              </>
            } />

          </Routes>

        </div>

      </BrowserRouter>
    </div>
  );
}
export default App;


