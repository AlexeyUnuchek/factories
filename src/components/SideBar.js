import { Link } from 'react-router-dom';
import './sidebar.css';

function SideBar() {
    return (
        <div className="sideBar">
            <ul>
                <li>Username</li>
                <li><Link to={"/"}>Dashboard</Link></li>
                <li><Link to={"/search"}>Factories</Link></li>
                <li><Link to={"/orders"}>Orders</Link></li>
            
                <li>Agents</li>
                <li>Business requests</li>
                <li>Settings</li>
                <li> Help</li>
            </ul>
        </div>
    )
}

export default SideBar;

