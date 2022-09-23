import {useState, useEffect} from 'react';

function useEffectComponent(){
    const [val, valSet] = useState<number>(1);

    useEffect(() => {
        const timer = window.setInterval(() => {
            valSet(v => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, [])

    return (
        <div>
            {val}
        </div>
    )
}

export default useEffectComponent;