import { Link } from 'react-router-dom';
import './sidebar.css';
import { useState } from 'react';


function SideBar() {
    const [showfactoriesItems, setShowfactoriesItems] = useState(false);
    const [showAgentsItems, setShowAgentsItems] = useState(false);
    return (
        <div className="sideBar">
            <div>
                <div className='nav-link'><Link to='username'>Username</Link></div>
                <div><Link to='/'>Dashboard</Link></div>
                <div className='nav-link' onClick={() => setShowfactoriesItems(!showfactoriesItems)}><Link to='factories'> Factories</Link></div>

                {showfactoriesItems &&
                    <div>
                        <div className='nav-subItem'><Link to='search'>Search</Link></div>
                        <div className='nav-subItem'><Link to='favorite'>Favorite</Link></div>
                    </div>
                }
                <div className='nav-link' onClick={() => setShowAgentsItems(!showAgentsItems)}><Link to='agents'>Agents</Link></div>
                {showAgentsItems &&
                    <div>
                        <div className='nav-subItem'><Link to='searchAgents'></Link>SearchAgents</div>
                        <div className='nav-subItem'><Link to='favoriteAgents'></Link>FavoriteAgents</div>

                    </div>
                }
                <div><Link to='businessRequest'>Business requests </Link></div>
                <div><Link to='orders'>Orders</Link></div>
                <div><Link to='settings'>Settings</Link></div>
                <div><Link to='help'>Help</Link></div>
            </div>
        </div>
    )
}

export default SideBar;

