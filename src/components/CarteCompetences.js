import React from 'react';
import competences from "../pages/Competences";

function traiterContenuCarte(nom) {
    if(nom === "langages web") {
        return (
            <div>

                <ul>
                    <li>Front-end:</li>
                    <li>
                        <div>HTML</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>CSS/SCSS</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>JavaScript</div>
                        <div>⭐⭐</div>
                    </li>
                    <li>
                        <div>React</div>
                        <div>⭐⭐</div>
                    </li>
                </ul>
                <ul>
                    <li>Back-end:</li>
                    <li>
                        <div>PHP</div>
                        <div>⭐⭐⭐</div>
                    </li>
                </ul>
            </div>

        );
    } else if(nom === "langages pour applications") {
        return (
            <div>
                <ul>
                    <li>Haut niveau:</li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/java-logo.png" alt="java" />
                        </div>
                        <div>Java</div>
                        <div>⭐⭐⭐⭐⭐</div>

                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/python-logo.png" alt="java" />
                        </div>
                        <div>Python</div>
                        <div>⭐⭐</div>
                    </li>
                </ul>
                <ul>
                    <li>Bas niveau:</li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/c-logo.png" alt="java" />
                        </div>
                        <div>C</div>
                        <div>⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/bash-logo.png" alt="java" />
                        </div>
                        <div>Bash</div>
                        <div>⭐</div>
                    </li>
                </ul>
            </div>
        );
    } else if(nom === "base de données") {
        return (
            <div>
                <ul>
                    <li>
                        <div>SQL</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>PL/SQL</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>OracleSQL+</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>MariaDB</div>
                        <div>⭐⭐⭐</div>
                    </li>
                </ul>
            </div>

        );
    } else if(nom === "autres compétences") {
        return (
            <div>
                <ul>
                    <li>
                        <div>GitLab/GitHub</div>
                        <div>⭐⭐⭐</div>
                    </li>

                    <li>
                        <div>UML</div>
                        <div>⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>Gestion SCRUM</div>
                        <div>⭐⭐</div>
                    </li>
                </ul>
            </div>

        );
    }
}

const CarteCompetences = (competence) => {

    return (
        <div className="carteCompetences">
            <h3>{competence.competence}</h3>
            <div className="contenuCarteCompetences">
                {/* rajouter une petite fleche pour montrer que c'est cliquable et que ca se déroule
                aussi un petit descriptif quand on passe la souris dessus afin de savoir ce qu'il y a dedans
                */}
                {traiterContenuCarte(competence.competence)}
            </div>
        </div>
    );
};

export default CarteCompetences;