import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { LoadingAlert, LoadingText } from "../../types/loading";
import {warnLog} from "../../../../log";


const Alert: FC = () => {
    
    const { loading } = Selector( ( {fetchReducer} ) => fetchReducer );
    const {SHOW, HIDDEN, WRAPPER, WRAPPER_ROLE, SPAN_WAIT, SPAN_TEXT } = LoadingAlert;
    const {WAIT, LOADING_DATA} = LoadingText;

    if (loading){
        warnLog('loading')
    }

    return (
        <div className={ loading ? SHOW : HIDDEN } role={"alert"}>
            <div className={WRAPPER}
                role={WRAPPER_ROLE}>
                <span className={SPAN_WAIT}>{WAIT}</span>
                <span className={SPAN_TEXT}>{LOADING_DATA}</span>
            </div>
        </div>
    );
};

export default Alert;