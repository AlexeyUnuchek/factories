import SearchFactories from './components/Search/SearchFactiries';
import {Dashboard} from './components/Dashboard';
import SideBar from './components/SideBar';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { Orders } from './components/Orders';
import { Factories } from './components/Factories';
import { Agents } from './components/Agents';
import { Settings } from './components/Settings';
import { Help } from './components/Help';
import { BusinessRequest } from './components/BusinessRequest';
import { UserName } from './components/UserName';
import { Factories1A } from './components/Search/Factories1A';
import { Factories1B } from './components/Search/Factories1B';

function App() {
  return (
    <div className="App">
     <SideBar/>
     <Routes>

      <Route path='/' exact element={<Dashboard />} />
      <Route path='username' UserName element={<UserName />} />
      <Route path='search' element={<SearchFactories />} />
      <Route path='orders' element={<Orders />} />
      <Route path='factories' element={<Factories />} />
      <Route path='Agents' element={<Agents />} />
      <Route path='businessRequest' element={<BusinessRequest />} />
      <Route path='settings' element={<Settings />} />
      <Route path='help' element={<Help />} />
      <Route path='Factories1A' element={<Factories1A />} />
      <Route path='Factories1B' element={<Factories1B />} />

     </Routes>
     
    </div>
   
  );
}

export default App;
