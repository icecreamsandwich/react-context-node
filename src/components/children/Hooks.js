import React, { useState, useEffect } from 'react';


const useFetch = (id) => {
    const [data, updateHook] = useState("");
    //make some ajax calls and set the value for result
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(res => res.json())
            .then((result) => {
                updateHook(result);
                console.log(JSON.stringify(result))
            })
            .catch(err => console.log(err))
    }, [])
    return data;
    // alert("came here") 
}

const Hooks = () => {
    //const url = "nothing";
    var result = useFetch(1);
    var scoppy = "";
    function udpateHookState(id) {
        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(res => res.json())
            .then((result2) => {
                scoppy = JSON.stringify(result2);

                console.log(scoppy)
            })
            .catch(err => console.log(err))
    }
    /* const udpateHookState = () =>{
        alert("udpate hook state called")
        var result = useFetch(3)
    } */
    return (
        <div>
            {JSON.stringify(result)}
            <br />
            <button onClick={(e) => udpateHookState(2)}>Update the hook state</button>
            <div style={{ backgroundColor: 'green' }}>
                {scoppy}
            </div>
        </div>
    )
}
export default Hooks;

/* function Hooks() {
    //define the hook variable and function
    const [name, changeName] = useState("muneeb");
    const [age, incrAge] = useState(20);
    const [result, updateHook] = useState("result modified")

    const callUseFetch = () => {
        var result = useFetch();
        updateHook(result);
    }
    //basically this is similar to
    /* this.setState({
        name : "muneeb",
        age : 20
    });


    return (
        <div>
            <h2>Hooks</h2>
            <p>
                Name : <input type="text" value={name} onChange={(e) => changeName(e.target.value)} />
            </p>
            <p>
                Age : <button onClick={(e) => incrAge(age + 1)}>Increment Age</button>
            </p>

            <p>
                State :
               Name : {name} <br />
                Age : {age}
            </p>
        </div>
    );
}

export default Hooks; */



