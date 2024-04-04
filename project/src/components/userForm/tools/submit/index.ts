import type {DataFetch} from "../../../../state/reducers/fetch/type";
import { actionsBind } from "../../../../state/hooks";
const { addCart } = actionsBind;

const pushCart = ( userInputValue:string , data: DataFetch[] )=>{
    for ( let i = 0; i < data.length; i++ ) {
        const {username} = data[i]

        if ( username.toUpperCase() === userInputValue ) {
            addCart( data[i] );
        }
    }
};

export default pushCart