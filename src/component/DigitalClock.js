import { useEffect, useState } from "react"

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let timerId;
        timerId = setInterval(() => {
         setTime(new Date().toLocaleTimeString());
        }, 1000);
      return () => clearInterval(timerId); // Component Will Unmount.
    }, []);

    return (
        <div>
            <p>Time is: {time}</p>
        </div>
    )
}

export default DigitalClock;