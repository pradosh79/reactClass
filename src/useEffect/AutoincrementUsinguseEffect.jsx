import React, { useEffect, useState } from 'react';

export default function AutoincrementUsinguseEffect() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count > 1) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
            return () => clearInterval(timer); // Clean up on unmount or update
        }
    }, [count]);

    return (
        <div>
            <h1>Countdown: {count}</h1>
        </div>
    );
}
