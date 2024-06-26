import React, {FC} from "react";
import { AppClasses } from "../../../app/const";
import { AddUser } from "../../../userForm/ui";
import Board from "../../../board/ui";
import Success from "../../../alerts/ui/success";
import Warn from "../../../alerts/ui/warn";
import Loading from "../../../alerts/ui/loading";


const Index: FC = () => {
    const {ADD_USER} = AppClasses;

    return (

        <div className={"relative"}>
            <Loading/>
            <Success/>
            <Warn/>
            <div className={ADD_USER}>
                <AddUser />
            </div>
            <Board/>
        </div>
    );
};

export default Index;