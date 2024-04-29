import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import { Link } from "react-router-dom";
import { Board } from "../../../board/types";
import { Info } from "../type";



const Index: FC = () => {
    const { activeCartId, carts } = Selector( ({cartsReducer} )=> cartsReducer );
    const {WRAPPER_CONTENT, CONTENT, WRAPPER, PB, LINK, LINK_TEXT, SPAN, } = Info;
    const infoCart = Info.CART
    const {CART} = Board;
    const infoText = ( info:string | number )=> info ? `${info}` : "Not found";

    window.scrollTo( 0,0 );

    const cart = carts.find( ( {id} )=> id === activeCartId );

    if ( cart !== undefined ) {
        const {name, phone, password, username, address, email, id} = cart
        const {firstname, lastname} = name
        const {geolocation, city, street, number, zipcode} = address
        const {lat, long} = geolocation

        const cartInfo  = {
            addressInfo: {
                geolocationInfo: { latInfo: infoText( lat ), longInfo: infoText( long ) },
                cityInfo: infoText( city ),
                streetInfo: infoText( street ),
                numberInfo: infoText( number ),
                zipcodeInfo: infoText( zipcode ),
            },

            idInfo: infoText( id ),
            emailInfo: infoText( email ),
            usernameInfo: infoText( username ),
            passwordInfo: infoText( password ),
            nameInfo: { firstnameInfo: infoText( firstname ), lastnameInfo: infoText( lastname ) },
            phoneInfo: infoText( phone ),
        };

        const {nameInfo, phoneInfo, passwordInfo, usernameInfo, addressInfo, emailInfo, idInfo} = cartInfo
        const {firstnameInfo, lastnameInfo} = nameInfo
        const {geolocationInfo, cityInfo, streetInfo, numberInfo, zipcodeInfo} = addressInfo
        const {latInfo, longInfo} = geolocationInfo

        return (
            <div className={WRAPPER}>
                <Link to={"/"} className={LINK}>
                    {LINK_TEXT}
                </Link>
                <div className={CART + infoCart}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `ID: ${idInfo}`}</div>
                        <div className={CONTENT}>{ `Name: ${firstnameInfo}`}</div>
                    </div>
                </div>
                <div className={CART + infoCart}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `Name: ${firstnameInfo}`}</div>
                        <div className={CONTENT}>{ `Surname: ${lastnameInfo}`}</div>
                    </div>
                </div>
                <div className={CART + infoCart}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `User: ${usernameInfo}`}</div>
                        <div className={CONTENT}>{ `Password: ${passwordInfo}`}</div>
                        <div className={CONTENT}>{ `Email: ${emailInfo}`}</div>
                        <div className={CONTENT}>{ `Phone: ${phoneInfo}`}</div>
                    </div>
                </div>

                <div className={CART + infoCart}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `City: ${cityInfo}`}</div>
                        <div className={CONTENT}>{ `Street: ${streetInfo}`}</div>
                        <div className={CONTENT}>{ `Number: ${numberInfo}`}</div>
                        <div className={CONTENT}>{ `Zipcode: ${zipcodeInfo}`}</div>
                    </div>
                    <div className={WRAPPER_CONTENT + PB}>
                        <span
                            className={SPAN}>{`lat: ${latInfo}`}</span>
                        <span
                            className={SPAN}>{`long: ${longInfo}`}</span>
                    </div>
                </div>
            </div>
        );
    }

    return <></>;
};

export default Index;