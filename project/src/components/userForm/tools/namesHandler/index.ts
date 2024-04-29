import { NameType } from "../../types";
import { Selector } from "../../../../state/hooks";

const namesHandler: NameType = () => {
    const { data } = Selector( ( {axiosReducer} ) => axiosReducer );
    const nameArr: string[] = [];

    data.forEach( ( { username } ) => {
        nameArr.push( username.toUpperCase() );
    } );

    if ( nameArr.length === data.length ) {
        return nameArr;
    }
};

const includesName = () => {
    const { userInputValue } = Selector( ( {searcherReducer} ) => searcherReducer );
    return namesHandler()?.find( ( name )=> name === userInputValue );
};



export {
    includesName,
    namesHandler,

};
