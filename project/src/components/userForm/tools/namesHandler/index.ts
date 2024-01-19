import { NameType } from "../../types";
import { Selector } from "../../../../state/hooks";

const namesHandler: NameType = () => {
    const { data } = Selector( ( state ) => state.fetchReducer );
    const nameArr: string[] = [];
    data.forEach( ( { username } ) => {
        nameArr.push( username.toUpperCase() );
    } );
    if ( nameArr.length === data.length ) {
        return nameArr;
    }
};

const labelName = () => {
    const { userInputValue } = Selector( ( state ) => state.searcherReducer );
    return namesHandler()?.find( ( name )=> name === userInputValue );
};

const includesName = labelName;


export {
    labelName,
    namesHandler,
    includesName
};
