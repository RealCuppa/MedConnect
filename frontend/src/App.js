import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/*<Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />*/}
      <Route path="/login" element={<Login />} />
      {/*<Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />*/}
    </Routes>
    </>
  );
}

export default App;
