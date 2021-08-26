import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss'


const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
               <Link className="option" to="/shop">
                   SHOP
               </Link>
               <Link className="option" to="/contact">
                   CONTACT
               </Link>
               {
                   currentUser ? 
                   <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                   :
                   <Link className="option" to="/signin">SIGN IN</Link>
               }
               <CartIcon />
            </div>
            <CartDropDown />
        </div>
    )
}

const mapStateToProps = state => ({
     currentUser : state.user.currentUser
})

//connect is a HOC Component that connects a component to a redux reducer
export default connect(mapStateToProps)(Header)
