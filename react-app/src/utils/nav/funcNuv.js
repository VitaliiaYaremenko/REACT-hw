import { useNavigate } from 'react-router-dom';
import  routeNames  from './../../routerConfig/routeNames.js';

const useNavigation = () => {
    const navigate = useNavigate();

    const goToTodoItem = (id) => {
        navigate(`${routeNames.todoItemPage}/${id}`);
    };

    return {
        goToTodoItem,
    };
};

export default useNavigation;
