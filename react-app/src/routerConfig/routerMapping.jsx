// import {Routes, Route} from "react-router-dom";
// import routerConfig from "./routerConfig.js";
//
//
// const RouterMapping = () => {
//     return <Routes>
//         {routerConfig.map(({path, component: PageComponent, id}) => {
//             return <Route path={path} element={<PageComponent />} key={id} />
//         })}
//
//     </Routes>
// }
//
//
// export default RouterMapping;

import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import PrivateRoutes from "./PrivateRoutes";
import NotFoundPage from "../pages/NotFoundPage";
import routeNames from "./routeNames";
import TodoItemPage from "../pages/TodoItemPage/index.js";
import AllTodoPage from "../pages/AllTodoPage/index.js";
import {useAuth} from "../components/AuthProvider/AuthProvider.jsx";

const RouterMapping = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(routeNames.mainPage);
        } else {
            navigate(routeNames.loginPage);
        }
    }, [isAuthenticated, navigate]);

    return (
        <Routes>
            <Route path={routeNames.loginPage} element={<LoginPage />} />
            <Route element={<PrivateRoutes />}>
                <Route path={routeNames.mainPage} element={<MainPage />} />
                <Route path={routeNames.todoItemPage} element={<TodoItemPage />} />
                <Route path={routeNames.allTodoPage} element={<AllTodoPage />} />
            </Route>
            <Route path={routeNames.pageNotFound} element={<NotFoundPage />} />
        </Routes>
    );
};

export default RouterMapping;

