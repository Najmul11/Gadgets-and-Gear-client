import { useContext } from "react";
import { FilterProductContext } from "../contexts/FilterProductsProvider";


export const useFilterContext=()=>useContext(FilterProductContext)