import React, {FC} from "react";
import "./css/index.css";
import { AppClasses, Path } from "./types";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/pageHome";
import { PageInfo } from "../pages/pageInfo";



const App: FC = () => {
    const {CONTAINER} = AppClasses;
    const {HOME, INFO} = Path;
    return (
        <div className={CONTAINER} >
            <Routes>
                <Route path={HOME} element={<PageHome/>}/>
                <Route path={INFO} element={<PageInfo/>}/>
            </Routes>
        </div>
    );
};

export default App;
