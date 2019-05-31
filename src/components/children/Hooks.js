import React, { useState, useEffect } from 'react';

//call usefetch to update the data initially
const useFetch = id => {
  const [data, updateHook] = useState('');
  //make some ajax calls and set the value for result
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then(res => res.json())
      .then(result => {
        updateHook(result);
        console.log(JSON.stringify(result));
      })
      .catch(err => console.log(err));
  }, [id]);
  return data;
};

const Hooks = () => {
  var result = useFetch(1);
  const [result2, udpateResult] = useState('');
  const [userId, udpateHookState] = useState('');
  /*  const [query, udpateHookVar] = useState(''); */

  /* useEffect(() => {
        const fetchdata = () => {
            fetch("https://jsonplaceholder.typicode.com/todos/" + query)
                .then(res => res.json())
                .then((result) => {
                    udpateResult("");
                    setTimeout(() => {
                        udpateResult(result);
                    }, 5000);
                    
                   // udpateHookState(result);
                    console.log(JSON.stringify(result))
                })
                .catch(err => console.log(err))
        };
        fetchdata();
    }, [query]); */

  const udpateStateVar = (value) => {
    udpateHookState(value);
  };

  const udpateHookVar = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + userId)
      .then(res => res.json())
      .then(result => {
        udpateResult(result);
        console.log(JSON.stringify(result));
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {JSON.stringify(result)}
      <br />
      <input type="text" onChange={e => udpateStateVar(e.target.value)} />
      <button onClick={e => udpateHookVar()}>Update the hook state</button>
      <div style={{ backgroundColor: 'green', marginTop: '20px' }}>
        {JSON.stringify(result2)}
      </div>
    </div>
  );
};
export default Hooks;