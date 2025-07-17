import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Internalmarks from './components/Internalmarks';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Internalmarks/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
