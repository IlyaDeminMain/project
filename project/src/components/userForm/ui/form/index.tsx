import React, { FormEvent, FC } from "react";
import { Children, UserSearcherWrapper } from "../../types/form";
import { actionsBind, Selector } from "../../../../state/hooks";
import { includesName } from "../../tools/namesHandler";
import pushCart from "../../tools/submit";
const { warnForm, successForm } = actionsBind;




const UserForm: FC<Children> = ( {children} ) => {
    const { data } = Selector( ( {axiosReducer} ) => axiosReducer );
    const { userInputValue } = Selector( ( {searcherReducer} ) => searcherReducer );
    const {FORM} = UserSearcherWrapper;
    const nameIn = ( includesName() );

    const onSubmit = ( event:  FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        if ( !nameIn ) {
            warnForm( true );
            successForm( false );
        } else {
            pushCart( userInputValue, data );
            warnForm( false );
            successForm( true );
        }

    };
    return (
        <form className={FORM} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default UserForm;