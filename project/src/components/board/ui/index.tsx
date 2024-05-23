import React, {FC} from "react";
import { actionsBind, Selector } from "../../../state/hooks";
import {Board, InfoCart, SvgBoard} from "../const";
import { Link } from "react-router-dom";
import "../css/index.css";

const Index: FC = () => {
    const { carts } = Selector( ( {cartsReducer} ) => cartsReducer );
    const {removeCart, activeCartUser} = actionsBind;
    const {BOARD_WRAPPER, BTN, DESC, CART, CLOSE, HEADER, SUBHEADER} = Board;
    const {BTN_INFO, INFO} = InfoCart;
    const {CLASS, D, FILL, LINECAP, STROKE, STROKE_WIDTH, XMLNS, VIEW_BOX, LINE_JOIN, ARIA_HIDDEN} = SvgBoard;

    const maxLength = ( nameText:string, maxNumber:number )=>{
        if ( nameText.length < maxNumber ) {
            return nameText;
        }
        return nameText.slice( 0, maxNumber ) + "...";
    };

    return (
        <div className={BOARD_WRAPPER}>
            {
                carts.map( ( {username, name, id}, index )=>{

                    let {firstname, lastname} = name;
                    username = username.toLowerCase();
                    firstname = firstname.toUpperCase();
                    lastname = lastname.toUpperCase();
                    const idHeader = ( ( index + 1 ) + "# " );
                    const nameHeader = maxLength( username, 8 );
                    const textHeader = idHeader + nameHeader;

                    let textSubheader = firstname + lastname;
                    textSubheader = maxLength( textSubheader, 19 );

                    return (
                        <div key={`${Math.random()}cart`}
                            className={CART + " border-t-25"}>
                            <button className={CLOSE} onClick={()=>{removeCart( index );}}>🗙</button>
                            <h5 className={HEADER}>{textHeader}</h5>
                            <p className={SUBHEADER}>{textSubheader}</p>
                            <p className={DESC}>{INFO}</p>
                            <Link to={"info"} className={BTN} onClick={()=>{activeCartUser( id );}}>
                                {BTN_INFO}
                                <svg className={CLASS}
                                    aria-hidden={ARIA_HIDDEN}
                                    xmlns={XMLNS}
                                    fill={FILL} viewBox={VIEW_BOX}>
                                    <path stroke={STROKE}
                                        strokeLinecap={LINECAP}
                                        strokeLinejoin={LINE_JOIN}
                                        strokeWidth={STROKE_WIDTH}
                                        d={D} />
                                </svg>
                            </Link>
                        </div>
                    );
                } )
            }
        </div>
    );
};

export default Index;