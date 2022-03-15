import { useState } from "react"; 
import { createUser } from "../../utils"; 


export const Login = ({setUser}) => {
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [pass, setPass] = useState();
const [bool, setBool] = useState(false);


const submitHandler = (e) => {
    e.preventDefault();
    if( email && email.includes("@")) {
    // setUser({username: username, email: email, pass: pass});
    createUser(username, email, pass);
   }
  };

    return (
    <>

      <form onSubmit={submitHandler}>
      <input 
      onChange={(event) => setUsername(event.target.value) } 
      placeholder= "username" />
      {!bool && 
      <input 
      onChange={(event) => setEmail(event.target.value) }
      placeholder= "email" type="email"/>}
      <input 
      onChange={(event) => setPass(event.target.value) } 
      placeholder= "password" 
      type="password" />

      <button 
      type="submit">Submit</button>
      </form>
      <button onClick={() => setBool(!bool)}>log-in or Sign-up </button>
    </>
    );
};

    {/* conditional rendering, two different example && means and if user = ?  else =: */}

// user gets the value, setUser changes it
// this is how usesState work
// const useState = (initialvalue) => {
// let state = initialVal;
// state = newValue
// }
// return [state, setState]
// }
