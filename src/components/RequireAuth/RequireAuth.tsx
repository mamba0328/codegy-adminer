import React, {useState, useEffect, ReactElement, ReactNode} from "react";
import { useNavigate }                                       from "react-router-dom";

import { verifyToken, refreshToken }                         from "../../services/RequestService/RequestsService";

type Props = {
    children: ReactElement | ReactNode
};
export const RequireAuth: React.FC<Props> = ({children}:Props)=> {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate();
    const checkTokenIsOk = async () => {
        try {
            await verifyToken();
            setIsAuth(true)
        } catch (error) {
            console.log(error)
            console.log('Trying to refresh token...')
            await getNewToken();
        }
    }

    const getNewToken = async () => {
        try{
            const response = await refreshToken();
            const {token} = response.data;
            localStorage.setItem('token', token);
            setIsAuth(true)
        } catch (error){
            console.log('Token failed to refresh', error)
            navigate("/sign-in");
        }
    }

    useEffect(() => {
        setIsAuth(false);
        setIsLoaded(false);
        checkTokenIsOk();
    }, [children]);

    useEffect(() => {
        const tokenIsSetted = localStorage.getItem('token');
        if(isAuth && tokenIsSetted){
            setIsLoaded(true);
        }
    }, [isAuth])

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    } else {
        return children;
    }
};