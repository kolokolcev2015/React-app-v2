import React from "react";
import {connect} from "react-redux";
import {isNotAuth} from "../../../redux/actions";

function Header({isNotAuth}) {
    return (
        <div className="header block">
            <div className="Logo">
                <p>Товары</p>
            </div>
            <div className="Info">
                <div className="personsInfo">
                    Здравствуйте!
                </div>
                <button className="btnLogout btn" onClick={() => isNotAuth()}>Выйти</button>
            </div>
        </div>
    )
}

const getAction = {
    isNotAuth
}

export default connect(null,getAction)(Header)