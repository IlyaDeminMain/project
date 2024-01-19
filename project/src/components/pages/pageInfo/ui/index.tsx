import React, {FC} from "react";
import { Selector } from "../../../../state/hooks";
import { Link } from "react-router-dom";
import { Board } from "../../../board/types";
import { Info } from "../type";

const {CART} = Board;
const {WRAPPER_CONTENT, CONTENT, WRAPPER, PB, LINK, LINK_TEXT, SPAN} = Info;

const infoFind = ( arg:string | number )=> arg ? `${arg}` : "Not found";

const Index: FC = () => {
    const { activeCart, carts } = Selector( ( state )=> state.cartsReducer );
    window.scrollTo( 0,0 );
    const cart = carts.find( ( cart )=>{
        if ( cart.id === activeCart ) {
            return true;
        }
    } );
    if ( cart !== undefined ) {
        const {id, email, username, password, phone} = cart;
        const {lat, long} = cart.address.geolocation;
        const {city, street, number, zipcode} = cart.address;
        const { firstname, lastname} = cart.name;
        const cartInfo  = {
            address: {
                geolocation: { lat: infoFind( lat ), long: infoFind( long ) },
                city: infoFind( city ),
                street: infoFind( street ),
                number: infoFind( number ),
                zipcode: infoFind( zipcode ),
            },

            id: infoFind( id ),
            email: infoFind( email ),
            username: infoFind( username ),
            password: infoFind( password ),
            name: { firstname: infoFind( firstname ), lastname: infoFind( lastname ), },
            phone: infoFind( phone ),
        };

        return (
            <div className={WRAPPER}>
                <Link to={"/"} className={LINK}>
                    {LINK_TEXT}
                </Link>
                <div className={CART + Info.CART}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `Name: ${cartInfo.name.firstname}`}</div>
                        <div className={CONTENT}>{ `Surname: ${cartInfo.name.lastname}`}</div>
                    </div>
                </div>
                <div className={CART + Info.CART}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `User: ${cartInfo.username}`}</div>
                        <div className={CONTENT}>{ `Password: ${cartInfo.password}`}</div>
                        <div className={CONTENT}>{ `Email: ${cartInfo.email}`}</div>
                        <div className={CONTENT}>{ `Phone: ${cartInfo.phone}`}</div>
                    </div>
                </div>

                <div className={CART + Info.CART}>
                    <div className={WRAPPER_CONTENT}>
                        <div className={CONTENT}>{ `City: ${cartInfo.address.city}`}</div>
                        <div className={CONTENT}>{ `Street: ${cartInfo.address.street}`}</div>
                        <div className={CONTENT}>{ `Number: ${cartInfo.address.number}`}</div>
                        <div className={CONTENT}>{ `Zipcode: ${cartInfo.address.zipcode}`}</div>
                    </div>
                    <div className={WRAPPER_CONTENT + PB}>
                        <span
                            className={SPAN}>{`lat: ${cartInfo.address.geolocation.lat}`}</span>
                        <span
                            className={SPAN}>{`long: ${cartInfo.address.geolocation.long}`}</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
    
    
    
};

export default Index;