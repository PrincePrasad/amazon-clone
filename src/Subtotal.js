import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';


function Subtotal() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <p>
                            Subtotal (<span> {basket?.length} </span>items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs. "}
            />

            <button>Checkout</button>
        </div>
    )
}

export default Subtotal
