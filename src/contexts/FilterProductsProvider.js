import { createContext, useEffect } from "react";


export const FilterProductContext=createContext()



const FilterProductsProvider = (props) => {
   
    return (
        <FilterProductContext.Provider value={{}}>
            {props.children}
        </FilterProductContext.Provider>
    );
};


export default FilterProductsProvider;