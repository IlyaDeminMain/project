import React, { FC } from "react";
import { Selector } from "../../../../state/hooks";
import "../../css/index.css";
import { LoadingAlert, LoadingText } from "../../types/loading";

const {SHOW, HIDDEN, WRAPPER, WRAPPER_ROLE, SPAN_WAIT, SPAN_TEXT } = LoadingAlert;
const {WAIT, LOADING_DATA} = LoadingText;

const Alert: FC = () => {
    const { loading } = Selector( ( state ) => state.fetchReducer );
    return (
        <div className={ loading ? SHOW : HIDDEN }>
            <div className={WRAPPER}
                role={WRAPPER_ROLE}>
                <span className={SPAN_WAIT}>{WAIT}</span>
                <span className={SPAN_TEXT}>{LOADING_DATA}</span>
            </div>
        </div>
    );
};


export default Alert;