import "./Layout.css"
import {Home, About , NotFound, Dogs, Futurama, Hp} from "@/pages"
import {Root} from "@/layouts" 
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext"

const router = createBrowserRouter([
    {
        path: "/", element: <Root />, 
        children:[
            {
                path:"/", element: <Home />
            },
            {
                path:"/a-propos", element: <About />
            },
            {
                path:"/dogs", element: <Dogs />
            },
            {
                path:"/futurama", element: <Futurama />
            },
            {
                path:"/hp", element: <Hp />
            },
        ],
        errorElement: <NotFound />
    },
    {
        path:"/*", element: <NotFound />, errorElement: <NotFound />
    }   
])

const Layout = () => {

    return(
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default Layout