import React, { Component } from "react";
import {slide as Menu} from 'react-burger-menu';
import { Link } from "react-router-dom";

export default function SideMenu() {

    return (
        <>
            <Menu>
                <a id="home" className="menu-item" component={Link} to="/">Home</a>
                <a id="home" className="menu-item" component={Link} to="/portfolio">Portfolio</a>
                <a id="home" className="menu-item" component={Link} to="/contato">Contato</a>
            </Menu>
        </>
    );
}