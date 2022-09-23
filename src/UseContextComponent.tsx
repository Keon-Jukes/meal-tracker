import { useState, useContext } from 'react';
import UserContext, {UserState} from './store';

function ConsumerComponent(){
    const user = useContext(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

function UseContextComponent(){
    const [user, userSet] = useState<UserState>({
        first: "Keon",
        last: "Jukes"
    });

return (
    <UserContext.Provider value={user}>
        <ConsumerComponent />
    </UserContext.Provider>
    )
}

export default UseContextComponent;