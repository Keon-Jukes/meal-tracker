import {useState} from "react";

function UseStateComponent(){
    //add type number to specify what will go into the array
    const [arr, arrSet] = useState<number[]>([]);

    return(
        <div>
            <div>
                <button onClick={() => arrSet([...arr, arr.length + 1])}>
                    Add to array</button>
                {JSON.stringify(arr)}
            </div>
        </div>
    )
}

export default UseStateComponent;