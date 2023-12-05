import { createContext, useState } from "react";
import FunctionContextComponent from './component/FunctionContextComponent';
import ClassContextComponent from './component/ClassContextComponent';

export const ThemeContext = createContext();

export default function ContextApi() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(!darkTheme);
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