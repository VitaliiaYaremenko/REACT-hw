import routeNames from "./routeNames.js";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import TodoItemPage from "../pages/TodoItemPage";

const pagesRoutesConfig = [
    {
        path: routeNames.loginPage,
        component: LoginPage,
        id: 1,
    },
    {
        path: routeNames.mainPage,
        component: MainPage,
        id: 2,
    },
    {
        path: routeNames.todoItemPage,
        component: TodoItemPage,
        id: 3,
    },
]

export default pagesRoutesConfig;
