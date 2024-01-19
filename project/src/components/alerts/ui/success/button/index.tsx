import React, {FC} from "react";
import { ButtonAlert } from "../../../types/success/button";
import { actionsBind } from "../../../../../state/hooks";
const { successForm } = actionsBind;

const { BTN_CLASS } = ButtonAlert;

const Index: FC = () => {
    const onClick = ()=>{successForm( false );};

    return (
        <button className={BTN_CLASS} onClick={onClick}>
        🗙
        </button>
    );
};

export default Index;