import React, { useState } from "react";
import ClassContextComponent from "./component/ClassContextComponent";
import FunctionContextComponent from "./component/FunctionContextComponent";


export const ThemeContext = React.createContext();

export default function ContextApi() {
    const [darkTheme, setDarkTheme] = useState(true);


    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <>  
          <ThemeContext.Provider value={darkTheme}>
             <button onClick={toggleTheme}>Toggle Theme</button>
             <FunctionContextComponent />
             <ClassContextComponent />  
          </ThemeContext.Provider>    
        </>
    )
}