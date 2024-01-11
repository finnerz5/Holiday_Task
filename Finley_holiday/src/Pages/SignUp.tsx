import axios from "axios";
import { FormEvent, useState } from "react";



function SignUP(){
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setMessage("");

        try{
        const Reply = await axios.post("http://127.0.0.1:5000/Login", {
        username: UserName,
        password: Password,
        });
        setMessage(JSON.stringify(Reply.data));
        }catch (error) {
            if(axios.isAxiosError(error)) {
                setMessage(error.message);
            } else {
                setMessage(String(error));
            }
        }
    };

    return (
        <>
            <p>Welcome to the sign up page.</p>
            <p>Enter your details below</p>

            <form onSubmit={handleSubmit} className="form1">
            <label htmlFor="Username">UserName:</label>
            <input type="text" id="username"  autoComplete="off" onChange={(e) => setUserName(e.target.value)}/>

            <label htmlFor="password">Password:</label>
            <input type="text" id="password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Send Request</button>
            </form>

            {Message && <p>Response: {Message}</p>}
        </>
    )

};

export default SignUP;