require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.handler = async (event) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",

        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    };
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: "Successful preflight call." }),
      };
    }

    if (event.httpMethod === "POST") {
        try {
            const { amount } = JSON.parse(event.body);
            
                                const paymentIntent = await stripe.paymentIntents.create({
                                amount,
                                  currency: 'inr',
                                  payment_method_types: ['card'],
                                  // payment_method_options: {
                                  //   card: {
                                  //     mandate_options: {
                                  //       reference: '{{REFERENCE}}',
                                  //       description: 'INR Rupee',
                                  //       amount: `${amount}`,
                                  //       amount_type: 'rupee',
                                    
                                  //       interval: 'agam',
                                  //       interval_count: '1',
                                  //       supported_types: ['india'],
                                  //     }
                                  //   }
                                  // },
                                  // confirm: true,
                                });

            // const paymentIntent = await stripe.paymentIntents.create({
            //     amount,
            //     currency: "usd",
            //     payment_method_types: ["card"],
            // });

            return {
                statusCode: 200,
                headers: {
              
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ paymentIntent }),
            };
        } catch (error) {
            return {
                statusCode: 400,
                headers: {
                   
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ error }),
            };

        }
    }
};
