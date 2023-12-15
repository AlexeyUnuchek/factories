import './dashboard.css'

export function Dashboard() { 
    return (
        <div className="dashboard">
            <div className='row'>
                <div className="dashboardItem">Profile</div>
                <div className="dashboardItem">Team</div>
            </div>

            <div className='row'>
                <div className="dashboardItem">Documents</div>
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