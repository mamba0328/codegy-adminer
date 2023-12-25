import React, { ReactNode }         from "react";
import {Route, Routes} from "react-router-dom";

import {RequireAuth} from "./components/RequireAuth/RequireAuth";

import Layout                       from "./components/Layout/Layout"
import NewPost                      from "./modules/NewPost/NewPost";
import Page404                      from "./components/Page404/Page404";
import Home                         from "./modules/Home/Home";


export function AppRouter():ReactNode {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                { unprotectedRoutes() }
                { protectedRoutes() }
            </Route>
        </Routes>
    )

}

function protectedRoutes():ReactNode{
    return (
        <>
            <Route index element={
                // <RequireAuth>
                    <Home/>
                // </RequireAuth>
            }/>
            <Route path={'new-post'} element={
                // <RequireAuth>
                    <NewPost/>
                // </RequireAuth>
            }/>
        </>
    )
}

function unprotectedRoutes():ReactNode{
    return (
        <>
            <Route path={'*'} element={
                <Page404/>
            }/>
        </>
    )
}