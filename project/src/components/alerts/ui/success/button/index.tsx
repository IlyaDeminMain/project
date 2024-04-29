import React, {FC} from "react";
import { ButtonAlert } from "../../../types/success/button";
import { actionsBind } from "../../../../../state/hooks";
const { successForm } = actionsBind;



const Index: FC = () => {
    const onClick = ()=>{successForm( false )};
    const { BTN_CLASS } = ButtonAlert;

    return (
        <button className={BTN_CLASS} onClick={onClick}>
        🗙
        </button>
    );
};

export default Index;
