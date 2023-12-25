import React, {useState, useEffect, ReactElement, ReactNode} from "react";
import { useNavigate }                                       from "react-router-dom";

import { verifyToken }                                       from "../../services/RequestService/RequestsService";

type Props = {
    children: ReactElement | ReactNode
};
export const RequireAuth: React.FC<Props> = ({children}:Props)=> {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    const checkTokenIsOk = async () => {
        try {
            const authToken = localStorage.getItem('token');
            if (!authToken) {
                return setIsLoggedIn(false);
            }

            const response = await verifyToken();
            return response.status === 200 ? setIsLoggedIn(true) : setIsLoggedIn(false);
        } catch (error){
            console.log(error)
        } finally {
            setIsLoaded(true)
        }
    }

    useEffect(() => {
        checkTokenIsOk();
    }, []);


    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }
    if(!isLoggedIn){
        navigate("/login");
        return null
    }

    return children;
};