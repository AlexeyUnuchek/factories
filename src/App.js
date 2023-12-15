import Search from './components/SearchFactiries';
import {Dashboard} from './components/Dashboard';
import SideBar from './components/SideBar';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Orders } from './components/Orders';

function App() {
  return (
    <div className="App">
     <SideBar/>
     <Routes>

      <Route path='/' exact element={<Dashboard />} />
      <Route path='search' element={<Search />} />
      <Route path='orders' element={<Orders />} />
     </Routes>
     
    </div>
   
  );
}

export default App;
