import React from "react";
import MenuTile from "./MenuTile";
import { MENU_ITEMS } from "../utils/allConstance";

export default function Menu() {
    return (<div className="menu">
     {Object.entries(MENU_ITEMS).map(menuItem => {
        const [ key, val ] = menuItem;
        return (<React.Fragment>
                <MenuTile name={key} icon={val}></MenuTile>
            </React.Fragment>)
    })}
    </div>)
}

