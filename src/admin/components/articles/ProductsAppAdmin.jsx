import React,{useEffect} from 'react'
import { useDispatch } from "react-redux";
import {getArticles} from "../../../features/articleSlice";


import AfficheAerticleTable from './AfficheAerticleTable';

const ProductsAppAdmin = () => {
const dispatch = useDispatch();
useEffect(() => {
dispatch(getArticles());
},[])

return (
<div>

<AfficheAerticleTable />
</div>
)
}
export default ProductsAppAdmin