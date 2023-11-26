import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {

    const [menu, setMenu] = useState(() => ["Accueil","Competences","Projets","Futur","Contacts"]);

    return (
        <div className="navigation">
            <ul>
                {menu.map((onglet) =>
                    <li  key={onglet}>
                        <NavLink
                            to={"/" + onglet}
                            key={onglet}
                            className={(navigation) => (navigation.isActive ? "nav-active" : "")}>
                            {onglet}
                        </NavLink>
                    </li >

                )}
            </ul>
        </div>
    );
};

export default Navigation;