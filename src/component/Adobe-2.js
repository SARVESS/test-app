import { useEffect, useState } from "react"


export default function Adobe2() {
    const [input, setInput] = useState('');

    useEffect(() => {
      console.log('what is input', input);
    }, [input]);

    return (
      <div>
        <input style={{ padding: 20 }} onChange={(e) => {setInput(e)}} />
      </div>
    )
}