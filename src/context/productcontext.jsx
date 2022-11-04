import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const API = "https://raw.githubusercontent.com/fazlerabbytalukder/toys-town/main/public/Data.json";

const AppProvider = ({ children }) => {
    const getProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
    }


    useEffect(() => {
        getProducts(API);
    }, []);


    return <AppContext.Provider value={{myName: "Rabby"}}>
        {children}
    </AppContext.Provider>
}


//custom hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };