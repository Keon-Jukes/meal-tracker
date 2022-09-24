import { useState, useEffect} from "react";


export interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
  }


function useFetchData(url: string){
    const [data, dataSet] = useState<string | null>(null);
    const [done, doneSet] = useState<boolean | null>(false);

    useEffect(() => {
        fetch(url)
        .then((resp)=> resp.json())
        .then((d) => {
            dataSet(d);
            doneSet(true);
        });
    }, [url]);

    return {
        data,
        done
    }
}





function CustomHookComponent() {
    return (
        <div>

        </div>
    )
}

export default CustomHookComponent;