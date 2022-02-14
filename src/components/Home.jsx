import React from "react";

export default ()=>{
    const name = new URLSearchParams(window.location.search).get('name');

    const table = ()=>{
        const home = document.querySelector('.home');
        home.innerHTML = "<table><tr><th>Classification:</th>            <th>Name:</th>            <th>Country:</th>        </tr>        <tr>            <td>1</td>            <td>ICBC</td>            <td>China</td>        </tr>        <tr>            <td>2</td>            <td>JP Morgan Chase</td>            <td>United States</td>        </tr>        <tr>            <td>3</td>            <td>Berkshire Hathaway</td>            <td>United States</td>        </tr>        <tr>            <td>4</td>            <td>China Construction Bank</td>            <td>China</td>        </tr>        <tr>            <td>5</td>            <td>Saudi Arabian Oil Company (Saudi Aramco)</td>            <td>Saudi Arabia</td>        </tr>    </table>";
    }
    
    return(
        <>
            <h3>Be welcome, {name}</h3>
            <div className="home">
                <p><button onClick={()=>table()}>Click me</button></p>
                <p><button onClick={()=>table()}>Click me</button></p>
                <p><button onClick={()=>table()}>Click me</button></p>
                <p><button onClick={()=>table()}>Click me</button></p>
            </div>
        </>
    );
}