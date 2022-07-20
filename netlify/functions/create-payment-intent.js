require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// exports.handler = async (event) => {
//   const headers = {
//     "Access-Control-Allow-Origin": "*",

//   };

//     // return {
//     //   statusCode: 200,
//     //   headers,
//     //   body: JSON.stringify({ Amount:1000 }),
//     // };
//   } catch (error) {
//     console.log({ error });

//     return {

//       headers,
//       body: JSON.stringify({ error }),
//     };
//   }
// };

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  }
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
                currency: "usd",
                payment_method_types: ["card"],
            });

            return {
                statusCode: 200,
                headers: {
                  ...CORS_HEADERS,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ paymentIntent }),
            };
        } catch (error) {
            return {
                statusCode: 400,
                headers: {
                    ...CORS_HEADERS,
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({ error }),
            };

            // const { name } = JSON.parse(event.body);
            // return {
            //   statusCode: 200,
            //   headers,
            //   body: JSON.stringify({ message: "Hello, " + name }),
            // };
        }
    }
};
