import React, {FC} from "react";
import "./css/index.css";
import { AppClasses, Path } from "./types";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/pageHome";
import { PageInfo } from "../pages/pageInfo";

const {CONTAINER} = AppClasses;
const {HOME, INFO} = Path;

const App: FC = () => {
    const screenHeight = window.screen.availHeight;
    const style = {minHeight: `${screenHeight}px`};

    return (
        <div className={CONTAINER} style={style}>
            <Routes>
                <Route path={HOME} element={<PageHome/>}/>
                <Route path={INFO} element={<PageInfo/>}/>
            </Routes>
        </div>
    );
};

export default App;
