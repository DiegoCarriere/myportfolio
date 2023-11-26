import React from 'react';

const liens = () => {
    return (
        <div className="liensContact">

            <div onClick={() => {
                window.open("./img/cv-Diego-Carriere.pdf","_blank")
            }}>
                <img src="./img/logo/cv.png" alt="curiculum vitae cv diego carriere"/>
                <h1>
                    CV
                </h1>
            </div>
            <div onClick={() => {
                window.open("https://www.linkedin.com/in/diego-carri%C3%A8re-1bb186264/","_blank")
            }}>
                <img src="img/logo/linkedin.png" alt="profile linkedin"/>
                <h1>
                    LinkedIn
                </h1>
            </div>

            <div onClick={() => {
                window.open("https://github.com/DiegoCarriere","_blank")
            }}>
                <img src="img/logo/github.png" alt="github"/>
                <h1>
                    GitHub
                </h1>
            </div>




        </div>
    );
};

export default liens;
