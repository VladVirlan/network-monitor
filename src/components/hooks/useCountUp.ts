import { useEffect, useState } from "react";

const useCountUp = (target: number, duration = 1500) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start: number | null = null;
        let frame: number;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setValue(Number((target * progress).toFixed(1)));
            if (progress < 1) {
                frame = requestAnimationFrame(step);
            }
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [target, duration]);

    return value;
}

export default useCountUp;