import axios from "axios";
import { FormEvent, useState } from "react";



function SignUP(){
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");
    const [RePassword, setRePassword] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setMessage("");
         if (!Password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$/)){
             setMessage("Password dont got the requirements.");
             return;
        }
        
         if (UserName.length < 5 || UserName.length >16){
             setMessage("Username length invalid");
             return;
         }
        
        if (RePassword !== Password){
            setMessage("Password dont match fella.");
            return;
        }
        

        try{
        const Reply = await axios.post("http://127.0.0.1:5000/Login", {
        username: UserName,
        password: Password,
        rePassword: RePassword,
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
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            

            <label htmlFor="Re-Password">Re-Password</label>
            <input type="password" id="rePassword" onChange={(e) => setRePassword(e.target.value)}/>
            <button type="submit">Send Request</button>
            </form>

            {Message && <p>Response: {Message}</p>}
        </>
    )

};

export default SignUP;