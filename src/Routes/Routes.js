import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CardDetail from "../pages/Home/CardDetail";
import Home from "../pages/Home/Home";
import InfoCard from "../pages/Home/InfoCard";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/infoCard',
                element:<InfoCard></InfoCard>
            },
            {
                path:'/infoCard/:id',
                element:<CardDetail></CardDetail>,
                loader:({params}) => fetch(`https://www.planndesign.com/gapi/drawings?slug=${params.id}`)
            }
           
        ]
    }
])

export default router;