
import { Link} from "react-router-dom"

function Nav (){
    return (
        <>
            <div>
            <nav>
                        <ul>
                            <li><Link to={'/profile'}>Profile</Link></li>
                            <li><Link to={'/settings'}>Settings</Link></li>
                        </ul>
                    </nav>
            </div>
        </>
    )
}
export default Nav;