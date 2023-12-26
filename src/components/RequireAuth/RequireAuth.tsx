import React, {useState, useEffect, ReactElement, ReactNode} from "react";
import { useNavigate }                                       from "react-router-dom";

import { verifyToken, refreshToken }                         from "../../services/RequestService/RequestsService";

type Props = {
    children: ReactElement | ReactNode
};
export const RequireAuth: React.FC<Props> = ({children}:Props)=> {
    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate();
    const checkTokenIsOk = async () => {
        try {
            await verifyToken(); //blank request to protected jwt api route, to verify token is valid
        } catch (error){
            console.log(error, 'Trying to refresh token...')
            await getNewToken();
        } finally {
            setIsLoaded(true)
        }
    }

    const getNewToken = async () => {
        try{
            const response = await refreshToken();
            const {token} = response.data;
            return localStorage.setItem('token', token);
        } catch (error){
            console.log('Token failed to refresh', error)
            navigate("/sign-in");
        }
    }

    useEffect(() => {
        checkTokenIsOk();
    }, [children]);


    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    return children;
};