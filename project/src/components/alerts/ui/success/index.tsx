import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { Success } from "../../types/success";
import Button from "./button";

const Alert: FC = () => {
    const { success } = Selector( ( state ) => state.searcherReducer );
    const { warn } = Selector( ( state ) => state.searcherReducer );
    const {SHOW, HIDDEN, TEXT} = Success;
    const trigger = ( success && !warn );

    return (
        <div className={ trigger ? SHOW : HIDDEN } role={"alert"}>
            <p>{TEXT}</p>
            <Button/>
        </div>
    );
};

export default Alert;