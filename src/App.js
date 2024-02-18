import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Error from './pages/Error';
import Success from './pages/Success';
import Navbar from './pages/common/Navbar';
import Footer from './pages/common/Footer';

function App() {
 
  return (
    <div className="App">

       <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/error?' element={<Error />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
