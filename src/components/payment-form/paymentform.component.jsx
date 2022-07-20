import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import {selectCartTotal} from './../../store/cart/cart.selector'
import {selectCurrentUser} from './../../store/user/user.selector'

import  { Button_Type_classe } from "../button/button.component";
import { PaymentFormContainer, Formcontainer,PaymentButton } from "./paymentformstyles";
const PaymentForm = () => {

    const stripe=useStripe();
    const amount=useSelector(selectCartTotal)
    const currentUser=useSelector(selectCurrentUser)
    const [isProssesingpayment,setisprocessingpayment]=useState(false)
    const elements=useElements();
    // setisprocessingpayment(true);
    const paymetnhandler=async(e)=>{
        console.log('hello')
        setisprocessingpayment(true)
        e.preventDefault();
        if(!stripe || !elements){return;}
    
        try{
            const response=await fetch('/.netlify/functions/create-payment-intent',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({amount:amount*100})
            }).then(res=>res.json())
            const {paymentIntent:{client_secret},}=response;
            const paymentResult=await stripe.confirmCardPayment(client_secret,{
                payment_method:{
                    card:elements.getElement(CardElement),
                    billing_details:{
                        name:currentUser?currentUser.displayName:"agam patel",
                    }
                }
            })
            if(paymentResult.error){
                console.log(paymentResult.error) 
            }else{
                if(paymentResult.paymentIntent.status==='succeeded')
                {
                    alert('Payment Successful')
                }
            }   

        }catch(error){
           alert('error occured while payment')
        }
            
        setisprocessingpayment(false)
       
     
    }
    return (
        <PaymentFormContainer>
            <Formcontainer onSubmit={paymetnhandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton isLoading={isProssesingpayment} buttontype={Button_Type_classe.inverted}>
                    Pay Now
                </PaymentButton>
            </Formcontainer>
            {/* /* <Formcontainer >
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button buttontype={Button_Type_classe.inverted}>
                    Pay Now
                </Button>
            </Formcontainer>*/ }
        </PaymentFormContainer> 
    );
};
export default PaymentForm;
