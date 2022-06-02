import { signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase-config";

export default function LogInManu(){
    
    const [errorMessage, setErrorMessage] = useState("");

    function Login(event){ 
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch(error => {
    let code = error.code; // saving error code in variable
    console.log(code);
    code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
    code = code.replaceAll("auth/", "");
    setErrorMessage(code);
});
    }
return(
    <div>
    <form onSubmit={Login}>
        <label>E-mail</label>
        <input type="text" name="email" id="email" placeholder="Tast din e-mail"></input>
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="Indtast dit password"></input>
        <p className="txterror">{errorMessage}</p>
        <button>Log ind</button>
    </form>
</div>
);
}