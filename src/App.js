import './App.css';
import { router } from './router/Routes';
import {RouterProvider} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from './contexts/AuthProvider';


export const CartContext=createContext() 


function App() {
  const {user}=useContext(AuthContext)
  const {data:items=[],isLoading, refetch}=useQuery({
      queryKey:['items', user?.email],
      queryFn:async()=>{
          const res=await fetch(`http://localhost:5000/cart/${user?.email}`)
          const data= await res.json()
          return data
      }
  })

  const cartInfo={refetch, items, isLoading}
  return (
    <CartContext.Provider value={cartInfo}>
      <div className="">
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
      </div>
    </CartContext.Provider>
  );
}

export default App;
