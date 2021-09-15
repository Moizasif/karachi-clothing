import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems, history}) => {
    return (
    
        <div className="cart-dropdown">
            <div className="cart-items">
             {
                 cartItems.Length ? (
                 cartItems.map(cartItem => (
                 <CartItem key={cartItem.id} item={cartItem} />
                    ))
                  ) : (
                    <span className="empty-message">Your Cart is Empty</span>
                  )}   
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
 
export default withRouter(connect(mapStateToProps)(CartDropDown))
