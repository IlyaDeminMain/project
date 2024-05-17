import React, {FC} from "react";
import {Selector} from "../../../../state/hooks";
import {Warn} from "../../types/warn";
import "../../css/index.css";


const Alert: FC = () => {
    const { success, warn, userInputValue } = Selector( ( {searcherReducer} ) => searcherReducer );
    const { error } = Selector( ( {axiosReducer} ) => axiosReducer );
    const {SHOW, TOP, TEXT, HEADER_TEXT, HEADER, HIDDEN, BODY, DOTS} = Warn;

    const notFound = ( InpVal: string )=>{
        const Length = InpVal.length;
        InpVal = InpVal + TEXT;

        if ( Length > 20 ) {
            return InpVal.slice( 0, 20 ) + DOTS;
        }

        return InpVal;
    };

    const trigger = ( !success && warn );
    const hidden = HIDDEN + TOP;

    return (
        <div className={trigger || error ? SHOW : hidden } role={"alert"}>
            <div className={HEADER}>
                {HEADER_TEXT}
            </div>
            <div className={BODY}>
                <p>{ notFound( userInputValue ) }</p>
            </div>
        </div>
    );
};

export default Alert;