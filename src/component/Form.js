import { useState } from "react"

export default () => {
    const [inputValue, setInputValue] = useState("");
    const updateInput = e => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" value={inputValue} onChange={updateInput} />
            </form>
        </div>
    )
}

// Licycle Methods 
// 1. Mounting 
// constructor -> static getDerivedStateFromProps -> render -> componentDidMount

// getDrivedStateFromProps -> It is basically called when we need to set or update the state using the props. 
// It is called after constructor and just before render funtion is called in mounting phase. 
// It is also use in updating phase of react lifecycle.
// This method returns an object or null depending on whether state needs to be changed on base of props.

// 2. Updating
// The updating phase is triggered when component props or state change or it is forced updated, and consists of the following methods: 
// static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate.
// - What causes component to update is props change, setState() and forceUpdate().