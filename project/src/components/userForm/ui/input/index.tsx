import React, {FC} from "react";
import { actionsBind , Selector } from "../../../../state/hooks";
import { InputUserType } from "../../types/input";



const InputUser: FC = () => {
    const { userInputValue } = Selector( ( {searcherReducer} ) => searcherReducer );
    const { autoComp, changeVal, warnForm, successForm } = actionsBind;
    const {CLASS, ID, TYPE, AUTO_COMPLETE_OFF, PLACEHOLDER} = InputUserType;

    const inputChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {
        warnForm( false );
        const { value } = target;
        changeVal( value.replace( /[^a-zA-Z0-9_]*$/, "" ).toUpperCase() ); //
    };

    return (
        <input
            className={CLASS}
            id={ID}
            type={TYPE}
            autoComplete={AUTO_COMPLETE_OFF}
            placeholder={PLACEHOLDER}
            value={userInputValue}
            onChange={inputChange}
            onClick={() => {
                autoComp( true );
                warnForm( false );
                successForm( false );
            }}
        />
    );
};

export default InputUser;
