import React, { FC } from "react";
import { AppClasses, Path } from "../types";
import { Route, Routes } from "react-router-dom";
import PageHome from "../../pages/pageHome/ui";
import { PageInfo } from "../../pages/pageInfo";
import "../css/index.css";
import { actionsBind, Selector } from "../../../state/hooks";
import { persiStore } from "../../../state/store";


const App: FC = () => {
    const {CONTAINER} = AppClasses;
    const {HOME, INFO} = Path;
    const {date} = Selector( ( {cartsReducer} )=> cartsReducer );
    const {setDate} = actionsBind;
    const newDate = new Date().getDay();
    const purge = async () => {
        await persiStore.purge();
        await persiStore.purge();
    };

    if ( typeof date !== "number" ) {
        setDate( newDate );
    }

    if ( newDate !== date ) {
        setTimeout( () => purge(), 200 );
        setDate( newDate );
    }

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
