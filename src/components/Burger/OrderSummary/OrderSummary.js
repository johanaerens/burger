import React, {Fragment} from "react";
import Button from "../../UI/Button/Button"

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed()}</strong></p>
            <p>Continue to checkout</p>
            <Button btnStyle="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnStyle="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Fragment>
    );
}
export default orderSummary;