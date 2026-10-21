import './Style/style.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';


import Cars from './Pages/Cars';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'; 

function App() {
  return (

    <Router>
      <Menu/>
      <Routes>
          <Route path ="/" excat Component={Home}/>
          <Route path ="/cars" excat Component={Cars}/>
          <Route path ="/services" excat Component={Services}/>
          <Route path ="/contact" excat Component={Contact}/>
        </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
