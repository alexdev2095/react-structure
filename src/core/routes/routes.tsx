import {
    createBrowserRouter,
    Outlet,
  } from "react-router-dom";
import { UserContainer } from "./imports";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
            index: true,
            element: <div>Hello Word</div>
        },
        {
            path: 'users',
            element: <UserContainer/>,
            children: [
                {
                    index: true,
                    element: <div>Users</div>,

                }
            ]
        }
      ]
    },
  ]);