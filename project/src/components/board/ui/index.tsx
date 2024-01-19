import React, {FC} from "react";
import "../css/index.css";
import { actionsBind, Selector } from "../../../state/hooks";
import { Board, InfoCart, styleCart, SvgBoard } from "../types";
import { Link } from "react-router-dom";

const {removeCart, activeCartUser} = actionsBind;

const {BOARD_WRAPPER, BTN, DESC, CART, CLOSE, HEADER, SUBHEADER} = Board;
const {BTN_INFO, INFO} = InfoCart;
const {CLASS, D, FILL, LINECAP, STROKE, STROKE_WIDTH, XMLNS, VIEW_BOX, LINE_JOIN, ARIA_HIDDEN} = SvgBoard;


const Index: FC = () => {
    const { carts } = Selector( ( state ) => state.cartsReducer );

    return (
        <div className={BOARD_WRAPPER}>
            {
                carts.map( ( {username, name, id}, index )=>{
                    const {firstname, lastname} = name;
                    const textHeader = `${index + 1}# ${username.length < 30 ? username.toUpperCase() : username.slice( 0, 19 ) + "..."}`;
                    let textSubheader = `${firstname.toUpperCase()} ${lastname.toUpperCase()}`;
                    textSubheader = textSubheader.length < 19 ? textSubheader : textSubheader.slice( 0, 19 ) + "...";
                    return (
                        <div key={`$${index}cart@@@`}
                            className={CART}
                            style={styleCart}
                        >
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