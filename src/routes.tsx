import React, { ReactNode }         from "react";

import NewPost                      from "./modules/NewPost/NewPost";
import Page404                      from "./components/Page404/Page404";

type RouteData = {
    path: string,
    element: ReactNode ,
}
export const routes:RouteData[] = [
    {
        path: "new-post",
        element: <NewPost key={'new-post'}/>,
    },
    {
        path: "*",
        element: <Page404 key={'page-404'}/>,
    },
]
