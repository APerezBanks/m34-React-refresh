import { useState, useEffect } from "react";
import { Login } from "./components/login";
import { Home } from "./components/home";
import './App.css';
import { tokenLogin } from "./utils";

const App = () => {
  const [user, setUser] = useState();

useEffect( () => { tokenLogin (setUser); }, [] );

  return (
    
    <div className="App">
      {/* {user && <h1>{user}</h1>} */}
      {user ? <h1>{user}</h1> : <h1> Please type something </h1>}
      {!user ? <Login setUser = {setUser} /> : <Home />}
    </div>
    
  );
};

export default App;



