import { fb} from 'service';
import {useEffect,useState} from 'react';

export const useAuth = () => {
    const [authUser, setAuthUser] = useState(); //undefined user from firebase or null

    useEffect( ()=>{
        const unsubscribe = fb.auth.onAuthStateChanged( user =>{
            if (user) {
                setAuthUser(user); // loged in
            }
            else {
                setAuthUser(null); // not login yet
            }
            });
        return unsubscribe; 
            
    }, []);
    return {
        authUser,
    };
};