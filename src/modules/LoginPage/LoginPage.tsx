import React, {useState, SyntheticEvent} from "react";
import { useNavigate }                   from "react-router-dom";

import { sendLogin }                     from "../../services/RequestService/RequestsService";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const setToken = (token:string) => {
        localStorage.setItem('token', token)
    }

    const onInputChange = (event: SyntheticEvent) => {
        const {name, value} = event.target as HTMLButtonElement;

        return name === 'username' ? setUsername(value) : setPassword(value);
    }
    const onSubmit = async (event: SyntheticEvent) => {
        try{
            event.preventDefault();

            const payload = {
                password, username, is_author: true,
            }

            const response = await sendLogin(payload);
            const {token} = response.data;
            setToken(token);

            navigate('/')
        } catch (error){
            console.log(error)
        }
    }


    return (
        <section className="w-full max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name={'username'} value={username} onChange={onInputChange}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" name={'password'} value={password} onChange={onInputChange}/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Sign In
                    </button>
                </div>
            </form>
        </section>
    );
}

export default LoginPage;