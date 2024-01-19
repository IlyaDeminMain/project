import React, {FC} from "react";
import { AppClasses } from "../../app/types";
import { AddUser } from "../../userForm/ui";
import Board from "../../board/ui";
import Success from "../../alerts/ui/success";
import Warn from "../../alerts/ui/warn";
import Loading from "../../alerts/ui/loading";

const {ADD_USER} = AppClasses;

const Index: FC = () => {
    return (
        <>
            <Loading/>
            <Success/>
            <Warn/>
            <div className={ADD_USER}>
                <AddUser />
            </div>
            <Board/>
        </>
    );
};

export default Index;