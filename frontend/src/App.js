import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
// import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/*<Route path="/contact" element={<Contact />} />*/}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/*<Route path="/dashboard" element={<Dashboard />} />*/}
    </Routes>
    </>
  );
}

export default App;
