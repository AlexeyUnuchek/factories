import { Link } from 'react-router-dom';
import './searchFactories.css'

function SearchFactories() {
    return (
        <table className="wrap">
            <tr>
                <td>
                    <div className='posts' ><Link>Post a job & Delegate to Al</Link></div>
                </td>
                <td>
                    <div className='partners'><Link>Browse Yourself Our Partner Base</Link></div>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <div className='internet'><Link> Go to Internet</Link></div>
                </td>
            </tr>

        </table>






    )
}
export default SearchFactories;