import React, { useCallback, useState } from "react";
import Child from './Child';

export default () => {
    const [count, setCount] = useState(1);
    console.log("Parent is Rendering");

    // 1. Here we are using useCallback to memoize the function(fromParent's) instance that we are sending to child as props from Parent.
    // Benefit is as in case of function whenever the parents is rendered a new function instance is created and thus child assumes that 
    // the props are changed but if we will wrap it in the useCallback this will help to memoize the instance of function and hence
    // the child component will not be re-rendered if other props are same as before.
    const fromParent = useCallback(() => {
        console.log("Child Button is Clicked");
    }, []);

    // 2. Here we are using useCallback to memoize the function(handleParent's) instance that we are sending to child as props from Parent.
    // Benefit is as in case of function whenever the parents is rendered a new function instance is created and thus child assumes that 
    // the props are changed but if we will wrap it in the useCallback this will help to memoize the instance of function and hence
    // the child component will not be re-rendered if other props are same as before.
    const handleParent = useCallback(() => {
         console.log('Handle Parent Call Backs');
    }, []);

    const parentButtonClicked = () => {
        setCount(count + 1);
    };

    return (<div>
        I am Parent
        <button onClick={parentButtonClicked}>I am Parent Button</button>
        <Child count={count} fromParent={fromParent} handleParenting={handleParent} />
    </div>)
}
// 1. useCallback - To memoize the instance of function we are sending to child from parent's.
// 2. React.memo - To memoize the react component so that if the props are not changed component will not be rerendered.
// 2. useMemo - To memoize the output of function to avoid heavy computtaion operations. 