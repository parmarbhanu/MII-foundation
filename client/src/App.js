import logo from './logo.svg';
import './App.css';
import Footer from './Universal/Footer';
import Header from './Universal/Header';
import Herosection from './Pages/Home/Herosection/Herosection';
import LandingPage from './Pages/Home/LandingPage';
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Herosection/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
