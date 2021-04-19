import React, { useContext } from 'react';
import loginBG from '../../../images/loginBg.png';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import firebaseConfig from './firebase.config';

if(firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        console.log('Google Sign In');
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error,errorCode,errorMessage)
        });
    }


    return (
        <div className='container'>
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <h3 className='text-center'>Login</h3>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="from-group mt-2">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img style={{width:'100%'}} src={loginBG} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;