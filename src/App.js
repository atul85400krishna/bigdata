import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Core from './components/Core';
import { ThemeContext } from './context/theme';
import { useContext } from 'react';
import Navbar1 from "./components/Navbar1";


function App() {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  return (
    <div className="App">
    <div className={ themename==="dark" ? "da":"la"}>
    <Navbar1 />

       {/* <Navbar /> */}
       <Home />
       <Core />
       <Footer />
       </div>
    </div>
  );
}

export default App;
