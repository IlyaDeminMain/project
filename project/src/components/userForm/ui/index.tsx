import React, { FC, useEffect } from "react";
import { Dispatch, Selector, actionsBind } from "../../../state/hooks";
import fetchUsers from "../../../state/reducers/fetch/asyncThunk";
import { AutoComplete, UserSearcherWrapper } from "../types/form";
import "../css/style.css";
import { namesHandler } from "../tools/namesHandler";
import BtnUser from "./button";
import InputUser from "./input";
import UserLabel from "./label";
import UserForm from "./form";


const AddUser: FC = () => {
    const dispatch = Dispatch();
    const { autoComplete } = Selector( ( {searcherReducer} ) => searcherReducer );
    const { changeVal, autoComp, warnForm, successForm } = actionsBind;
    const {HIDDEN, UL, SHOW, LI} = AutoComplete;
    const {WRAPPER, BOTTOM_WRAPPER, MB} = UserSearcherWrapper;

    const autoCompleteClasses: string = (UL + (autoComplete ? SHOW : HIDDEN)).toString();

    useEffect( () => {
        dispatch( fetchUsers( 10 ) );
    }, [] );

    return (
        <div className={WRAPPER} >
            <UserForm >
                <div className={MB}>
                    <UserLabel />
                    <InputUser />
                </div>
                <div className={BOTTOM_WRAPPER}>
                    <BtnUser />
                    <ul className={autoCompleteClasses}>
                        {namesHandler()?.map( ( name ) => {
                            const nameUp: string = name.toUpperCase();
                            return (
                                <li
                                    className={LI}
                                    key={`${Math.random()}li`}
                                    onClick={() => {
                                        warnForm( false );
                                        successForm( false );
                                        changeVal( nameUp );
                                        autoComp( false );
                                    }}
                                >
                                    {nameUp}
                                </li>
                            );
                        } )}
                    </ul>
                </div>
            </UserForm>
        </div>
    );
};

export { AddUser };
