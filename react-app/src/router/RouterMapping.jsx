import routerConfig from "./routerConfig.js";
import {Route, Routes} from "react-router-dom";

const RouterMapping = () => {

    const config = routerConfig;

    return (
        <Routes>
            {config.map(({path, component: PageComponent, id}) => {
                return <Route path={path} element={<PageComponent />} key={id} />
            })}
        </Routes>
    )
}

export default RouterMapping;
