import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { Footer } from './Footer';
import { LandingPage } from './LandingPage';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { Modules } from './Modules';
import { LoginSignUp } from './LoginSignUp';
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
            <Route path='/modules' element={<Modules />} />
            <Route path='/login' element={<LoginSignUp />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}
export default App;


