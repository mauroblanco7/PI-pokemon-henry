import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return (
        <div className="landingdiv">
            <h1>Bienvenido</h1>
            <Link className="link-landing" to="/home">
                <button><span>Ingresar</span></button>
            </Link>
        </div>
    )
}