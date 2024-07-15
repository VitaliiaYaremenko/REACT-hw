const routeNames = {
    mainPage: '/',
    pageNotFound: '*',
    loginPage: 'login',
    todoItemPage: '/todos/:id',
    allTodoPage: 'todosView'
}

Object.freeze(routeNames);
export default routeNames;
