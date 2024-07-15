import routeNames from "./routeNames.js";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import TodoItemPage from "../pages/TodoItemPage";
import AllTodoPage from "../pages/AllTodoPage";
import NotFoundPage from "../pages/NotFoundPage/index.js";

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
    {
        path: routeNames.allTodoPage,
        component: AllTodoPage,
        id:4,
    },
    {
        path: routeNames.pageNotFound,
        component: NotFoundPage,
        id: 5,
    }
]

export default pagesRoutesConfig;
