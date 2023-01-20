import React  from "react";
import { MENU_ITEMS } from "../utils/allConstance";
import { Link } from "react-router-dom";

export default function MenuTile(props: any) {
    const { name, icon }  = props;
    return (<React.Fragment>
        <Link to={`/`}>
            <div className="menu__tile">

                <div>
                {React.createElement(icon)}
                </div>
                <div>{name}</div>
            </div>
        </Link>
        </React.Fragment>)
}
