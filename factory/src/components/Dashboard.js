import { Link } from 'react-router-dom'
import './dashboard.css'


export function Dashboard() { 
    return (
        <div className="dashboard">
            <div className='row'>
                <div className="dashboardItem"><Link to='profile'>Profile</Link></div>
                <div className="dashboardItem"><Link to='team'>Team</Link></div>
            </div>

            <div className='row'>
                <div className="dashboardItem"><Link to='documents'>Documents</Link></div>
                <div className="dashboardItem">Orders</div>
                <div className="dashboardItem">Inbox</div>
            </div>
            
            <div className='row'>
                <div className="dashboardItem">Statistics</div>
                <div className="dashboardItem">Revenue</div>
                <div className="dashboardItem">Expences</div>
            </div>

        </div>
    )
}