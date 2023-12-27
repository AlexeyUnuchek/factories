import { Link } from 'react-router-dom';
import './sidebar.css';
import { useState } from 'react';

function SideBar() {
    const [showfactoriesItems, setShowfactoriesItems] = useState(false);
    return (
        <div className="sideBar">
            <div>
                <div className='nav-link'><Link to='username'>Username</Link></div>
                <div><Link to='/'>Dashboard</Link></div>
                <div className='nav-link' onClick={() => setShowfactoriesItems(!showfactoriesItems)}> Factories</div>

                {showfactoriesItems &&
                    <div>
                        <div className='nav-subItem'><Link to='search'>Search</Link></div>
                        <div className='nav-subItem'><Link to='favorite'>Favorite</Link></div>
                    </div>
                }
                <div ><Link to='agents'>Agents</Link> </div>
                <div Link to='businessRequest'>Business requests</div>
                <div>Orders</div>
                <div>Settings</div>
                <div> Help</div>
            </div>
        </div>
    )
}

export default SideBar;

