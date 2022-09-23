import { createContext } from "react";

const initialState = {
    first: 'Jack',
    last: "herrington"
};

export type UserState = typeof initialState

//typeof initialState is a way of adding a type before one is declared
const context = createContext<typeof initialState>(initialState);

export default context;