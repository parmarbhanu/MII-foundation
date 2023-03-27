import './App.css';
// import { Route,Routes } from 'react-router-dom';
 import Footer from './Universal/Footer';
// import Header from './Universal/Header';
import Herosection from './Pages/Home/Herosection/Herosection';
import LandingPage from './Pages/Home/LandingPage';
import About from "./Pages/AboutUs/About"
// import Ourpartner from "./Pages/AboutUs/Ourpartner"
// import Feature from './Feature/Feature';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
         {/* <Routes> */}
         {/* <Herosection/>
         <LandingPage/> */}
         {/* <Ourpartner/> */}
         {/* <About/> */}
        <About/>
        {/* </Routes> */}
        {/* <Feature/> */}
      <Footer/>
    </div>
  );
}

export default App;




