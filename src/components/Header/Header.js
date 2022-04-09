import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);


    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/register'>Register</Link>
            {
                user &&
                <>
                    <Link to='/vip'>VIP</Link>
                </>

            }
            <span>{user?.displayName && user?.displayName}</span>
            {
                user?.uid ? <button onClick={() => signOut(auth)}>Sign Out</button>
                    :
                    <Link to='/login'>Login</Link>
            }
        </div>
    );
};

export default Header;