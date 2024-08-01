import logo from './logo.svg';
import './App.css';
import Navbar from './Componets/Navbar';
import { Navbarouters } from './Routes/Navbaroutes';
import { Theamcontext } from './Context/Theamcontext';
import { useContext } from 'react';

function App() {
  const{light}=useContext(Theamcontext)
  return (
    <div className="App" style={{backgroundColor:light=="light"?"white":"black", color:light=="light"?"black":"white"}}>
     <Navbar />
     <Navbarouters/>
     {/* <DroneDescription/> */}
    </div>
  );
}

export default App;
