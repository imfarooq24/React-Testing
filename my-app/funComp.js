
/*
FUNCTIONAL

import React, { useState } from 'react';
import './App.css';
import PersonComp from './PersonComp/PersonComp';

const app = () => {

  const [personState,setPersonState] = useState(
    {
      person: [
        {name: "Clara",age:21},
        {name: "Ash",age:22},
        {name: "Jenny",age:23},
        {name: "Messi",age:24}
      ]
    });

    const changeNameHandler = () =>{
      setPersonState({
            person: [
          {name: "Babu",age:21},
          {name: "Ash",age:22},
          {name: "PIPI",age:23},
          {name: "Messi",age:24}
        ]
      });
    };

  return(
      <div id="root">
        <div className="App">
          <h1>Hey im a react app</h1>
          <p>This is really working</p>
          <button onClick={changeNameHandler}>Change Names</button>
          <PersonComp name={personState.person[0].name} age={personState.person[0].age}/>
          <PersonComp name={personState.person[1].name} age={personState.person[1].age}/>
          <PersonComp name={personState.person[2].name} age={personState.person[2].age}/>
          <PersonComp name={personState.person[3].name} age={personState.person[3].age}/>
        </div>
      </div>
  )
}

export default app;
*/