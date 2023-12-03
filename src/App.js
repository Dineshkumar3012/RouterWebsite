
import './App.css';
import Nav from './component/0navbar/Nav';
import Banner from './component/2Banner/Banner';
import About from './component/1About/About';
import Service from './component/4Service/Service'
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>} />
        <Route path='/Banner' element={<Banner/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Service' element={<Service/>} />
      </Routes>
    </div>
  );
}

export default App;
