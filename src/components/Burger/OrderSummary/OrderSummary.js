import React, {Component, Fragment} from "react";
import Button from "../../UI/Button/Button"

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total price: {this.props.price.toFixed()}</strong></p>
                <p>Continue to checkout</p>
                <Button btnStyle="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnStyle="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Fragment>
        );
    }
}

export default OrderSummary;