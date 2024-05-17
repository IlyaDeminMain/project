import React, { FC, useEffect } from "react";
import { Dispatch, Selector, actionsBind } from "../../../state/hooks";
import axiosThunk from "../../../state/reducers/api/asyncThunk";
import { AutoComplete, UserSearcherWrapper } from "../types/form";
import { namesHandler } from "../tools/namesHandler";
import BtnUser from "./button";
import InputUser from "./input";
import UserLabel from "./label";
import UserForm from "./form";
import "../css/style.css";

const AddUser: FC = () => {
    const dispatch = Dispatch();
    const { autoComplete } = Selector( ( {searcherReducer} ) => searcherReducer );
    const { changeVal, autoComp, warnForm, successForm } = actionsBind;
    const {HIDDEN, UL, SHOW, LI} = AutoComplete;
    const {WRAPPER, BOTTOM_WRAPPER, MB} = UserSearcherWrapper;

    const autoCompleteClass: string = ( UL + ( autoComplete ? SHOW : HIDDEN ) ).toString();

    useEffect( () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch( axiosThunk( 10 ) );
    }, [dispatch] );

    return (
        <div className={WRAPPER} >
            <UserForm >
                <div className={MB}>
                    <UserLabel />
                    <InputUser />
                </div>
                <div className={BOTTOM_WRAPPER}>
                    <BtnUser />
                    <ul className={autoCompleteClass}>
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
