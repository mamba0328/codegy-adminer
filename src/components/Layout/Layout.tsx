import {NavLink, Outlet} from "react-router-dom";
import React from "react";

export default function () {
    return (
        <main className={'grid grid-cols-main'}>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <aside>
                <nav>
                    <ul className={'flex flex-col gap-y-2 py-5 px-2'}>
                        <li>
                            <NavLink to="/"  className={({isActive})=> isActive ? 'underline' : ''}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/new-post" className={({isActive})=> isActive ? 'underline' : ''}>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>


            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </main>
    );
}