import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price =parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle subHeading='please process' heading='Payment'></SectionTitle>
            <h1 className="text-3xl">tk o tk Darling  amar kase asho</h1>
            <Elements stripe={stripePromise}>

                <CheckoutForm
                cart={cart}
                price={price}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;