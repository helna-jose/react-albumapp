import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Addalbum from './components/Addalbum';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addalbum/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
