import React from "react";
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import "./collection-item.styles.scss";
import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem}) => (
  <div className="collection-item">
    <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="image" />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
    <CustomButton onClick ={()=>addItem(item)} inverted>ADD TO CART</CustomButton>
  </div>
);

const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
