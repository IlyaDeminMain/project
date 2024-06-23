import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import { Link } from "react-router-dom";
import { Board } from "../../../board/const";
import { Info } from "../const";
import {NoPage} from "./noPage";
import {Content, Wrapper} from "./wrapper";

const Index: FC = () => {
    const { activeCartId, carts } = Selector( ( {cartsReducer} )=> cartsReducer );
    const {WRAPPER_CONTENT, WRAPPER, PB, LINK, LINK_TEXT, SPAN, } = Info;
    const infoCart = Info.CART;
    const {CART} = Board;
    const infoText = ( info:string | number )=> info ? `${info}` : "Not found";

    window.scrollTo( 0,0 );

    const cart = carts.find( ( {id} )=> id === activeCartId );

    try {
        if ( cart ) {
            const {name, phone, password, username, address, email, id} = cart;
            const {firstname, lastname} = name;
            const {geolocation, city, street, number, zipcode} = address;
            const {lat, long} = geolocation;

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

            const {nameInfo, phoneInfo, passwordInfo, usernameInfo, addressInfo, emailInfo, idInfo} = cartInfo;
            const {firstnameInfo, lastnameInfo} = nameInfo;
            const {geolocationInfo, cityInfo, streetInfo, numberInfo, zipcodeInfo} = addressInfo;
            const {latInfo, longInfo} = geolocationInfo;

            return (
                <div className={WRAPPER}>
                    
                    <Link to={"/"} className={LINK} >
                        {LINK_TEXT}
                    </Link>
                    
                    <Wrapper>
                        <Content>{ `ID: ${idInfo}` }</Content>
                        <Content>{ `Name: ${firstnameInfo}` }</Content>
                    </Wrapper>

                    <Wrapper>
                        <Content>{ `Name: ${firstnameInfo}`}</Content>
                        <Content>{ `Surname: ${lastnameInfo}`}</Content>
                    </Wrapper>

                    <Wrapper>
                        <Content>{ `User: ${usernameInfo}`}</Content>
                        <Content>{ `Password: ${passwordInfo}`}</Content>
                        <Content>{ `Email: ${emailInfo}`}</Content>
                        <Content>{ `Phone: ${phoneInfo}`}</Content>
                    </Wrapper>

                    <div className={CART + infoCart}>
                        <div className={WRAPPER_CONTENT}>
                            <Content>{ `City: ${cityInfo}`}</Content>
                            <Content>{ `Street: ${streetInfo}`}</Content>
                            <Content>{ `Number: ${numberInfo}`}</Content>
                            <Content>{ `Zipcode: ${zipcodeInfo}`}</Content>
                        </div>
                        <div className={WRAPPER_CONTENT + PB}>
                            <span
                                className={SPAN}>{ `lat: ${latInfo}`}</span>
                            <span
                                className={SPAN}>{ `long: ${longInfo}`}</span>
                        </div>
                    </div>
                    
                </div>
            );
        } else {
            throw new Error( "cart not found" );
        }
    } catch ( error ) {
        console.error( error );
    }

    return ( <NoPage/> );
};

export default Index;