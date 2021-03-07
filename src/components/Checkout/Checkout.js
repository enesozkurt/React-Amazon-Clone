import React from 'react';
import "./Checkout.css"
import Subtotal from "../Subtotal/Subtotal"

function Checkout ()  {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/41/prime/mastercards/MC_Prime_DealsPage_1500x80.jpg" alt=""/>
                    <div className="checkout__title">
                        <h2>Your Shopping Basket</h2>
                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        );
}

export default Checkout;
