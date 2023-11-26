import React from 'react';
import Navigation from "../components/Navigation";
import FormContact from "../components/FormContact";
import Liens from "../components/Liens";

const Contacts = () => {
    return (
        <div  className="page">
            <Navigation />
            <div className="contacts">
                <Liens />
                <FormContact />
            </div>

        </div>
    );
};

export default Contacts;