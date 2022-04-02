import {  useState, createContext } from "react";

export const appContext = createContext({});

export const addToCart = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [number, setNumber] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    const addProduct = () => {
    
        setCount(number);
    }
    
    return {
        number,
        count,
        setNumber,
        addProduct
        
    }
}