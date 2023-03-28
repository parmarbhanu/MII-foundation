import './App.css';
import Header from './Universal/Header';
import Footer from './Universal/Footer';
import Home from './Pages/Herosection';
import { Route, Routes } from "react-router-dom";
import Contact from './Pages/Contact';
import Article from './Pages/Article';
import Event from './Pages/Event';
import Offering from './Pages/Offering';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/contact' element={<Contact/> }/>
        <Route  path='/Offering' element={<Offering/> }/>
        <Route  path='/Article' element={<Article/> }/>
        <Route  path='/About' element={<About/> }/>
        <Route  path='/Event' element={<Event/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
