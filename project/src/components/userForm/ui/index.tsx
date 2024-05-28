import React, { FC, useEffect } from "react";
import { Selector, actionsBind } from "../../../state/hooks"
import axiosThunk from "../../../state/reducers/api/asyncThunk";
import { AutoComplete, UserSearcherWrapper } from "../const/form";
import { namesHandler } from "../tools/namesHandler";
import BtnUser from "./button";
import InputUser from "./input";
import UserLabel from "./label";
import UserForm from "./form";
import { useDispatch } from "react-redux"
import "../css/style.css";



const AddUser: FC = () => {
    const dispatch = useDispatch<any>();
    const { autoComplete } = Selector( ( {searcherReducer} ) => searcherReducer );
    const { changeVal, autoComp, warnForm, successForm } = actionsBind;
    const {HIDDEN, UL, SHOW, LI} = AutoComplete;
    const {WRAPPER, BOTTOM_WRAPPER, MB} = UserSearcherWrapper;

    const autoCompleteClass: string = ( UL + ( autoComplete ? SHOW : HIDDEN ) ).toString();

    useEffect( () => {

        dispatch( axiosThunk( 10 ) );

    }, [] );

    return (
        <div className={WRAPPER} style={{marginTop: "60px", marginBottom: "60px"}}>
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
