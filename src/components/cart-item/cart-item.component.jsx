import React from 'react';

import { CartItemContainer, ItemImageContainer, ItemDetailsContainer} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <ItemImageContainer src={imageUrl} alt='item'></ItemImageContainer>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x {'\u20B9'}{price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;