import {useState} from "react";

function UseStateComponent(){
    //add type number to specify what will go into the array
    const [arr, arrSet] = useState<number[]>([]);

    const [name, nameSet] = useState<string | null>(null);

    return(
        <div>
            <div>
                <button onClick={() => arrSet([...arr, arr.length + 1])}>
                    Add to array</button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => nameSet("Keon")}>
                    Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent;