import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {CollectionItemContainer, CollectionFooterContainer, AddButton, NameContainer, PriceContainer, BackGroundImage} from './collection-item.styles';

const CollectionItem = ({item, addItem}) =>{ 
    const { name, price, imageUrl }= item;
    return(
    <CollectionItemContainer>
        <BackGroundImage className='image' imageUrl={imageUrl}/>
        <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{'\u20B9'}{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
    </CollectionItemContainer>

)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);