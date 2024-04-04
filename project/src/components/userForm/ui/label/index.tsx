import React, { FC } from "react";
import { LabelUserType, TextColor } from "../../types/label";
import {includesName} from "../../tools/namesHandler";



const UserLabel: FC = () => {
    const labelNameToggle = includesName();
    const {BLACK, BLUE} = TextColor;
    const {CLASS, HTML_FOR, SEARCH_USER} = LabelUserType;
    let textColor;

    if ( labelNameToggle ) {
        textColor = BLUE;
    } else {
        textColor = BLACK;
    }

    return (
        <label className={CLASS + textColor} htmlFor={HTML_FOR}>
            {labelNameToggle ? `Add the user ${labelNameToggle}?` : SEARCH_USER}
        </label>
    );
};

export default UserLabel;

