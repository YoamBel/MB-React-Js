import React from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineShopping} from 'react-icons/ai';
import useCart from './useCart';
export default function CartLink(){const {cart,error}=useCart();const count=cart?.items.reduce((sum,item)=>sum+item.quantity,0)||0;
 return <Link to="/Command" className="link-ic local-cart-link" aria-label={error?'Panier à vérifier':`Votre panier (${count} pièces)`}><AiOutlineShopping className="ic-shopping ic"/><span className="local-cart-count" aria-hidden="true">{error?'!':count}</span><div className="ct-ic-shopping ct-ic">Panier et devis</div></Link>;
}
