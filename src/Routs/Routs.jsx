import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Oder/Order";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/singUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/secret/Secret";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Components/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"menu",
                element:<Menu></Menu>
            },
            {
                path:"order/:category",
                element:<Order></Order>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SingUp></SingUp>
            },
            {
                path: 'secret',
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
        
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'addItem',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path:'manageitems',
                element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
            }
        ]
    }
]); 