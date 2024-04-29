import React, {FC} from "react";
import { ButtonUserType } from "../../types/button";
import { actionsBind, Selector } from "../../../../state/hooks";
import { includesName} from "../../tools/namesHandler";
import pushCart from "../../tools/submit";



const BtnUser: FC = () => {
    const { loading, error, data } = Selector( ( {axiosReducer} ) => axiosReducer );
    const { userInputValue } = Selector( ( {searcherReducer} ) => searcherReducer );
    const { autoComp, changeVal, warnForm, successForm } = actionsBind;

    const btnBlocking: boolean = !loading && !error && userInputValue.length > 0;
    const {UNBLOCK, TYPE, BLOCK} = ButtonUserType;
    const nameIn = ( includesName() );

    const classBtn: () => string = () => {
        if ( btnBlocking ) {
            return UNBLOCK;
        } else {
            return BLOCK;
        }
    };

    return (
        <button
            className={classBtn()}
            type={TYPE}
            onClick={() => {
                if ( btnBlocking && nameIn ) {
                    autoComp( false );
                    changeVal( "" );
                    warnForm( false );
                    successForm( true );
                    pushCart( userInputValue, data );
                } else if ( btnBlocking && !nameIn ) {
                    warnForm( true );
                    successForm( false );
                }
            }}
        >
      ADD CART
        </button>
    );
};

export default BtnUser;
