import styles from  "./LoginForm.module.css";

const LoginForm = () => {

        return(
                <form>
                        <label htmlFor="user">User: </label>
                        <input type="email" name="user" id="user" required/>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" required />
                        <input type="button" value="Login" className={styles.button}/>      
                </form>
        )
}

export default LoginForm;