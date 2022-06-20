import { Fragment ,useContext} from "react";
import { Outlet,Link } from "react-router-dom";
import {ReactComponent as Crownlogo} from '../../assets/crown.svg'
import { UserContext } from "../../components/contexts/user.contexts";
import { signOutUser } from "../../utils/firebase.utils";

import './navigation.styles.scss'
const Navigation = () => {
    const {currentUser}=useContext(UserContext);
    // console.log(currentUser);


    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>

                <Crownlogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {currentUser?(<span onClick={signOutUser} className='nav-link'>SIGN OUT</span>):( <Link className="nav-link" to='/auth'>SIGN IN</Link>)}
                   
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};
export default Navigation;