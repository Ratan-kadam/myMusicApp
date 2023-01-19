import React, { Component } from "react";
import { MENU_ITEMS } from "../utils/allConstance";

export default function MenuTile(props: any) {
    const { name, icon }  = props;
    console.log(icon);
    return (<React.Fragment>
        <div className="menu__tile">
            <div>
            {React.createElement(icon)}
            </div>
            <div>{name}</div>
        </div>
        </React.Fragment>)
}
