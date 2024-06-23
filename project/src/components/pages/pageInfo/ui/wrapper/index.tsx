import React, {FC, ReactNode} from "react";
import {Board} from "../../../../board/const";
import {Info} from "../../const";


interface Props {
    children: ReactNode
}
const {WRAPPER_CONTENT, CONTENT } = Info;

const Wrapper: FC<Props> = ({children}) => {
    const infoCart = Info.CART;
    const {CART} = Board;
    return (
        <div className={CART + infoCart}>
            <div className={WRAPPER_CONTENT}>
                {children}
            </div>
        </div>
    )
};

const Content:FC<Props> = ({children}) => {
    return (
        <div className={CONTENT}>{children}</div>
    );
};

export {
    Wrapper,
    Content
}