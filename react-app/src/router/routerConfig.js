import routerNames from "./routerNames.js";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage/index.js";
import TodoItemPage from "../pages/TodoItemPage/index.js";
import AllTodosPage from "../pages/AllTodosPage/index.js";
import NotFound from "../pages/NotFound/index.js";

const pagesRoutesConfig = [
    {
        path: routerNames.loginPage,
        component:MainPage,
        id:1

    },
    {
        path: routerNames.mainPage,
        component: LoginPage,
        id: 2,
    },
    {
        path: routerNames.todoItemPage,
        component: TodoItemPage,
        id: 3,

    },
    {
        path: routerNames.allTodosPage,
        component: AllTodosPage,
        id:4,
    },
    {
        path: routerNames.notFoundPage,
        component: NotFound,
        id: 5,
    }
]

export default pagesRoutesConfig;
