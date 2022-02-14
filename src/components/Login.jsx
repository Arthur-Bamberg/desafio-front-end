import React, {useState} from "react";

export default () => {
    const [name, setName] = useState('');
    
    const handleChangeName = function() {
        const username = document.getElementById('user').value;
        setName(username);
    }

return (<div className="login">
    <h2>Login</h2>
    <div className="data">
        <p><label htmlFor="user">User:</label></p>
        <input type="text" id="user"></input>
    </div>
    <div className="data">
        <p>        <label htmlFor="password">Password:</label></p>
        <input type="password" id="password"></input>
    </div>
    <p><button onClick={()=>handleChangeName()}><a href={"./home?name="+name}>Acess</a></button></p>
</div>);
}