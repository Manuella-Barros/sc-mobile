import {createContext, ReactNode, useEffect, useState} from "react";
import {ICategories, IGlobalContext, IProduct} from "../interfaces/interfaces";
import {getAllCategories} from "../api/nest/GET/getAllCategories";
import {getAllProducts} from "../api/nest/GET/getAllProducts";

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export const ContextProvider = ({children}: {children: ReactNode}) =>{
    const [categories, setCategories] = useState<ICategories[] | null>(null);
    const [products, setProducts] = useState<IProduct[] | null>(null);

    useEffect(() => {
        getAllCategories().then(res => setCategories(res));
        getAllProducts().then(res => setProducts(res))
    }, [])

    return <GlobalContext.Provider value={{categories, products, setProducts}}>{children}</GlobalContext.Provider>
}