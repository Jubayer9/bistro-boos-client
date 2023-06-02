import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const navigation = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSigIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);


                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigation(from, { replace: true })


                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>

            <div className="w-full text-center my-4">
                <button type="button" onClick={handleGoogleSigIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;