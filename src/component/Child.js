import React, { useMemo } from "react";

// 3. Here we are using React.memo to memoize the child component so if the 
// props are not changing for this component it will not re-render.
export default React.memo(({ count, fromParent }) => {
    console.log("Child is Rendering");
    const heavyFunction = () => {
        console.log("Doing heavy cal")
        let i = 0;
        while (i < 5000000) {
            i += 1;
        }
        return i;
    };
    // 4. Here we are memoizing the function call so that every time component re-render 
    // we do not have to do the heavy computation.
    const memoHeavyFunction = useMemo(heavyFunction, []);

    return (<div>
        I am Child - {count}
        {memoHeavyFunction}
    </div>)
})