import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { Warn } from "../../types/warn";



const Alert: FC = () => {
    const { success, warn, userInputValue } = Selector( ( state ) => state.searcherReducer );
    const { error } = Selector( ( state ) => state.fetchReducer );
    const {SHOW, TOP, TEXT, HEADER_TEXT, HEADER, HIDDEN, BODY, DOTS} = Warn;
    const notFound = ( InpVal: string )=>{
        if ( InpVal.length > 20 ) {
            return InpVal.slice( 0, 20 ) + DOTS;
        } else {
            return InpVal;
        }
    };
    const trigger = ( !success && warn );

    return (
        <div className={trigger || error ? SHOW : HIDDEN + TOP } role={"alert"}>
            <div className={HEADER}>
                {HEADER_TEXT}
            </div>
            <div className={BODY}>
                <p>{`${notFound( userInputValue )} ${TEXT}`}</p>
            </div>
        </div>
    );
};

export default Alert;