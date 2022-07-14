import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import Button, { Button_Type_classe } from "../button/button.component";
import { PaymentFormContainer, Formcontainer } from "./paymentformstyles";
const PaymentForm = () => {
    const stripe=useStripe();
    const elements=useElements();
    const paymetnhandler=async(e)=>{
        e.preventDefault();
        if(!stripe || !elements){return;}
        console.log('hello')
        const response=await fetch('/.netlify/functions/create-payment-intent',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({amount:10000})
        }).then(res=>res.json())
        console.log(response)
    }
    return (
        <PaymentFormContainer>
            <Formcontainer onSubmit={paymetnhandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button buttontype={Button_Type_classe.inverted}>
                    Pay Now
                </Button>
            </Formcontainer>
        </PaymentFormContainer>
    );
};
export default PaymentForm;
