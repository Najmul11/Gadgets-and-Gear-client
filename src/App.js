import './App.css';
import { router } from './router/Routes';
import {RouterProvider} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
     <Toaster/>
    </div>
  );
}

export default App;
