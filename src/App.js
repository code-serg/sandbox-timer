import { useState, useEffect } from 'react';

let timerId = 0;

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    timerId++;
    const intervalId = setInterval(() => {
      setCount((currentCount) => {
        console.log(`TimerID ${timerId} ' Count: ' ${currentCount}`);
        return currentCount + 1;
      });
    }, 1000);

    // Cleanup: clear the interval when the component is unmounted or if it re-renders
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Timer: {count}</div>;
};

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
