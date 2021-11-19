import React from 'react';
import Subtotal from "./Subtotal";
import "./CheckOutPage.css";

function CheckOutPage() {
    return (
        <div className="checkoutPage">
            <h2>checkout page</h2>
            <div className="checkOutPage__elements">

            <div className="checkOutPage__left">
                <Subtotal />
            </div>
 
            <div className="checkOutPage__right">
               <h2>רשימת הקניות שלכם:</h2>   
            </div>
          
            </div>
        </div>
    )
}

export default CheckOutPage
