import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export const useProductContext=()=>useContext(ProductContext) 