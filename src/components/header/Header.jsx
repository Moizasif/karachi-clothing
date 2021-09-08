import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss'


const Header = ({currentUser, hidden}) => {
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

            {
                hidden ? null :<CartDropDown />
                
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden
})

//connect is a HOC Component that connects a component to a redux reducer
export default connect(mapStateToProps)(Header)
