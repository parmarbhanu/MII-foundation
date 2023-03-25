// import logo from './logo.svg';
import './App.css';
// import { Route,Routes } from 'react-router-dom';
import Footer from './Universal/Footer';
// import Header from './Universal/Header';
// import Herosection from './Pages/Home/Herosection/Herosection';
// import LandingPage from './Pages/Home/LandingPage';
// import About from "./Pages/AboutUs/About"
import Ourpartner from "./Pages/AboutUs/Ourpartner"
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
         {/* <Routes> */}
         {/* <Herosection/>
         <LandingPage/> */}
         <Ourpartner/>
         {/* <About/> */}
         {/* <Route  path='/about' element={<About/> }/> */}
        {/* </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;




