import React, { useContext, useState } from "react";


export const UserContext = React.createContext();

export default function ContextApi2() {
     const [userInput, setUserInput] = useState('');

     return(
        <>
          <UserContext.Provider value={userInput}>
              <input onChange={(e) => setUserInput(e.target.value)}/>
              <Component1 />
          </UserContext.Provider>
        </>
     )
}

const Component1 = React.memo(function() {
    console.log('Component-1 is rendering');
    return (
        <div>
            <label>This is a Compoent - 1</label>
            <Component2/>
        </div>
    )
});

function Component2() {
    const userInput = useContext(UserContext);
    console.log('Component-2 is rendering');
    return (
        <div>
            <p>This is Component2 with user Input as - {userInput}</p>
        </div>
    )
}