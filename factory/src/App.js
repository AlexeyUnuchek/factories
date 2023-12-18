import Search from './components/SearchFactiries';
import {Dashboard} from './components/Dashboard';
import SideBar from './components/SideBar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Orders } from './components/Orders';
import { Factories } from './components/Factories';
import { Agents } from './components/Agents';
import { Settings } from './components/Settings';
import { Help } from './components/Help';
import { BusinessRequest } from './components/BusinessRequest';

function App() {
  return (
    <div className="App">
     <SideBar/>
     <Routes>

      <Route path='/' exact element={<Dashboard />} />
      <Route path='search' element={<Search />} />
      <Route path='orders' element={<Orders />} />
      <Route path='factories' element={<Factories />} />
      <Route path='Agents' element={<Agents />} />
      <Route path='businessRequests' element={<BusinessRequest />} />
      <Route path='settings' element={<Settings />} />
      <Route path='help' element={<Help />} />
     </Routes>
     
    </div>
   
  );
}

export default App;
