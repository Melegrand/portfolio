import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFound from '../NotFound';
import About from '../About';
import Portfolio from '../Portfolio';
import Home from '../Home';
import Skills from '../Skills';
import Contact from '../Contact';

const App = () => {
    const [location, setLocation] = useState('')
    const [locationChanged, setlocationChanged] = useState(false)

    function handleChangeLocation() {
      locationChanged ? setlocationChanged(false) : setlocationChanged(true)
    }

    function getLocation() {
      setLocation(document.location.pathname);
    }

    useEffect(() => {
      getLocation()
    }, [locationChanged]);

      return (
        <Router>
              <Routes>
                  <Route path="/" element={<Home getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>} />
                  <Route path="/about" element={<About getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>} />
                  <Route path="/skills" element={<Skills getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>} />
                  <Route path="/portfolio" element={<Portfolio getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>} />
                  <Route path="/contact" element={<Contact getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>} />
                  <Route path="*" element={<NotFound/>} />
              </Routes>
        </Router>
      )
    
}

export default App;

