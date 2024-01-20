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
import { Factories2A } from './components/Search/Factories2A';
import { FactoriesFavorite } from './components/Search/FactoriesFavorite';
import { SearchAgents } from './components/Search/SearchAgents';
import { FavoriteAgents } from './components/Search/FavoriteAgents';

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
      <Route path='agents' element={<Agents />} />
      <Route path='businessRequest' element={<BusinessRequest />} />
      <Route path='settings' element={<Settings />} />
      <Route path='help' element={<Help />} />
      <Route path='factories1A' element={<Factories1A />} />
      <Route path='factories1B' element={<Factories1B />} />
      <Route path='factories2A' element={<Factories2A />} />
      <Route path='favorite' element={<FactoriesFavorite />} />
      <Route path='searchAgents' element={<SearchAgents />} />
      <Route path='favoriteAgents' element={<FavoriteAgents />} />


     </Routes>
     
    </div>
   
  );
}

export default App;
