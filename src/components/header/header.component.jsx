import React from 'react';
import {auth} from '../../firebase/firebase.utils.js'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import './header.styles.scss';

const Header = ({currentUser, hidden})=>(
    <div className='header'>
        <Link className ='logo-container' to ='/'>
            Logo
        </Link>

        <div className='options'>
           
            <Link className='option' to ='/contact'>
                CONTACT
            </Link>
            {currentUser ? 
            <div className = 'option' onClick={()=>auth.signOut()}>SIGN OUT</div>:
            <Link className='option' to ='/signin'>SIGN IN</Link>}
            <CartIcon />
        </div>
        {hidden ? null :  <CartDropdown/>}

    </div>
)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);
