import {Routes, Route,} from "react-router-dom";
import routerConfig from "./routerConfig.js";

const RouterMapping = () => {
    return (
        <Routes>
            {routerConfig.map(({path, component: PageComponent, id}) => {
                return <Route path={path} element={<PageComponent />} key={id} />
            })}
        </Routes>
    )
}

export default RouterMapping;
