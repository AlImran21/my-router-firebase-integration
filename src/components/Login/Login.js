import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth (app); 


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle (auth);
    const location = useLocation ();
    const navigate = useNavigate ();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle ()
        .then ( () => {
            navigate (from, {replace : true})
        })

    }

    return (
        <div>
            <h2>Please, Login</h2>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            <br /><br />
            <form action="">
                <input type="email" name="" id="" placeholder='Enter Your Email' />
                <br /><br />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;