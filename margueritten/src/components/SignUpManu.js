import { auth } from "../firebase-config";
import { doc, setDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { usersRef } from "../firebase-config";



export default function SignUpManu() {
const [errorMessage, setErrorMessage] = useState("");

function signUp(event){
    event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;
const name = event.target.name.value;
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential)=> {
    //Signed in
    const user = userCredential.user;
    const docRef = doc(usersRef, user.uid);
    setDoc(docRef, {email, name});
})
.catch(error => {
    let code = error.code; // saving error code in variable
    console.log(code);
    code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
    code = code.replaceAll("auth/", "");
    setErrorMessage(code);
});
}
    return (
        <div>
            <form onSubmit={signUp}>
            <label>Navn</label>
                <input type="text" name="name" id="name" placeholder="Indtast dit navn"></input>
                <label>E-mail</label>
                <input type="text" name="email" id="email" placeholder="Indtast din e-mail"></input>
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Indtast dit ønskede password"></input>
                
                <p className="text-error">{errorMessage}</p>
                <button>Opret bruger</button>
            </form>
        </div>
    )
}
