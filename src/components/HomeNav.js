import React from "react";
import {Link} from "react-router-dom";
import ScrollNav from "./ScrollNav";
import * as ROUTES from "../constants/routes";


export default function HomeNav() {
    return (
        <>
                <div className="headerNav">
                    <div className="loginDiv">
                        <Link to={ROUTES.SIGN_IN}>Zaloguj</Link>
                        <Link to={ROUTES.SIGN_UP}>Załóż konto</Link>
                    </div>
                    <div className="navDiv">
                        <Link to={ROUTES.HOME}>Start</Link>
                        <ScrollNav/>
                    </div>
                </div>
        </>
    )
}