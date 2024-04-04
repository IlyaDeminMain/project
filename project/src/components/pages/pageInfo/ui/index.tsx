import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import { Link } from "react-router-dom";
import { Board } from "../../../board/types";
import { Info } from "../type";



const Index: FC = () => {
    const { activeCart, carts } = Selector( ( {cartsReducer} )=> cartsReducer );
    const {CART} = Board;
    const {WRAPPER_CONTENT, CONTENT, WRAPPER, PB, LINK, LINK_TEXT, SPAN} = Info;

    const infoFind = ( arg:string | number )=> arg ? `${arg}` : "Not found";

    window.scrollTo( 0,0 );

    const cart = carts.find( ( {id} )=>{
        return id === activeCart
    } );

    if ( cart !== undefined ) {
        const {name, phone, password, username, address, email, id} = cart
        const {firstname, lastname} = name
        const {geolocation, city, street, number, zipcode} = address
        const {lat, long} = geolocation

        const cartInfo  = {
            addressInfo: {
                geolocationInfo: { latInfo: infoFind( lat ), longInfo: infoFind( long ) },
                cityInfo: infoFind( city ),
                streetInfo: infoFind( street ),
                numberInfo: infoFind( number ),
                zipcodeInfo: infoFind( zipcode ),
            },

            idInfo: infoFind( id ),
            emailInfo: infoFind( email ),
            usernameInfo: infoFind( username ),
            passwordInfo: infoFind( password ),
            nameInfo: { firstnameInfo: infoFind( firstname ), lastnameInfo: infoFind( lastname ) },
            phoneInfo: infoFind( phone ),
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
                <div className={CART + Info.CART}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `ID: ${idInfo}`}</div>
                        <div className={CONTENT}>{ `Name: ${firstnameInfo}`}</div>
                    </div>
                </div>
                <div className={CART + Info.CART}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `Name: ${firstnameInfo}`}</div>
                        <div className={CONTENT}>{ `Surname: ${lastnameInfo}`}</div>
                    </div>
                </div>
                <div className={CART + Info.CART}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `User: ${usernameInfo}`}</div>
                        <div className={CONTENT}>{ `Password: ${passwordInfo}`}</div>
                        <div className={CONTENT}>{ `Email: ${emailInfo}`}</div>
                        <div className={CONTENT}>{ `Phone: ${phoneInfo}`}</div>
                    </div>
                </div>

                <div className={CART + Info.CART}>
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