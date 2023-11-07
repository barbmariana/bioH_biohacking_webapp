import { useState } from "react";
import styles from  "./LoginForm.module.css";


const LoginForm = () => {
        const user : string = "email@email.com";
        const password : string = "1234abc";
        var [email, setEmail]= useState("");
        var [pass, setPass] = useState("");
        var [check, setCheck] = useState(0);

        const checkData= () : number => {
                var changePage = ()=> location.href = "/home";
                var intervalpage;

                if(email == user && password == pass){
                        setCheck(0);
                        intervalpage = window.setInterval(changePage, 200);
                }
                else
                {
                        setCheck(1);
                        setEmail("");
                        setPass("");
                        (document.getElementById("user") as HTMLInputElement).value = "";
                        (document.getElementById("password") as HTMLInputElement).value = "";
                }
                return check;
        }
        return(
                <form id="form">
                        <label htmlFor="user">User: </label>
                        <input type="email" name="user" id="user" required onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" required  onChange={e => setPass(e.target.value)}/>
                        <input type="button" value="Login" className={styles.button} onClick={checkData}/>
                        {check ? <p className={styles.mensagemAlerta}>Senha incorreta, tente de novo</p> : <p>    </p>} 
                </form>
        )
}

export default LoginForm;