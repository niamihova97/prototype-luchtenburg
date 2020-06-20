import React from 'react';
import { NavLink } from "react-router-dom";
import "./style/Navigation.css"
import {ReactComponent as RoomOverview} from "../images/roomOverview.svg";
import {ReactComponent as Forest} from "../images/forest.svg";
import {ReactComponent as Maglass} from "../images/maglass.svg";
import {ReactComponent as Challenge} from "../images/challenge.svg";
import {ReactComponent as Settings} from "../images/settings.svg";

export function Navigation() {
    return (
    <div className="navigation">
        <NavLink exact className="navigation__tab" activeClassName="navigation__tab--selected" to="/"><Forest/><div className="navigation__tab-text">My forest</div></NavLink>
        <NavLink className="navigation__tab" activeClassName="navigation__tab--selected" to="/overview"><Maglass/><div className="navigation__tab-text">Overview</div></NavLink>
        <NavLink className="navigation__tab" activeClassName="navigation__tab--selected" to="/room-review"><RoomOverview/><div className="navigation__tab-text">Room review</div></NavLink>
        <NavLink className="navigation__tab" activeClassName="navigation__tab--selected" to="/challenges"><Challenge/><div className="navigation__tab-text">Challenges</div></NavLink>
        <NavLink className="navigation__tab" activeClassName="navigation__tab--selected" to="/settings"><Settings/><div className="navigation__tab-text">Settings</div></NavLink>
    </div>);
}