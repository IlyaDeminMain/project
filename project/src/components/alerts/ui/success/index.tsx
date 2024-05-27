import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import { Success } from "../../const/success";
import Button from "./button";
import "../../css/index.css";

const Alert: FC = () => {
    const { success, warn } = Selector( ( {searcherReducer} ) => searcherReducer );
    const {SHOW, HIDDEN, TEXT} = Success;
    const trigger = ( success && !warn );

    return (
        <div className={ (trigger ? SHOW : HIDDEN) + " absolute w-full" } role={"alert"} >
            <p >{TEXT}</p>
            <Button/>
        </div>
    );
};

export default Alert;