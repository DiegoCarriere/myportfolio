import React from 'react';
import competences from "../pages/Competences";

function traiterContenuCarte(nom) {

    if(nom === "langages web") {
        return (
            <div>

                <ul>
                    <li>Front-end:</li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/html-logo.png" alt="html" />
                        </div>
                        <div>HTML</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/css-logo.png" alt="css" />
                            <img src="./img/logo-competences/sass-logo.png" alt="sass" />
                        </div>
                        <div>CSS/SCSS</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/javascript-logo.png" alt="javascript" />
                        </div>
                        <div>JavaScript</div>
                        <div>⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/react-logo.png" alt="html" />
                        </div>
                        <div>React</div>
                        <div>⭐⭐</div>
                    </li>
                </ul>
                <ul>
                    <li>Back-end:</li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/php-logo.webp" alt="php" />
                        </div>
                        <div>PHP</div>
                        <div>⭐⭐⭐</div>
                    </li>
                </ul>
            </div>

        );
    } else if(nom === "autres langages") {
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
                            <img src="./img/logo-competences/python-logo.png" alt="python" />
                        </div>
                        <div>Python</div>
                        <div>⭐⭐</div>
                    </li>
                </ul>
                <ul>
                    <li>Bas niveau:</li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/c-logo.png" alt="c language" />
                        </div>
                        <div>C</div>
                        <div>⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/bash-logo.png" alt="bash" />
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
                        <div>
                            <img src="./img/logo-competences/SQL-logo.webp" alt="SQL" />
                        </div>
                        <div>SQL</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/PLSQL-logo.png" alt="oracle ISQL" />
                        </div>
                        <div>PL/SQL</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/oracleISQL-logo.gif" alt="oracle ISQL" />
                        </div>
                        <div>OracleISQL*PLUS</div>
                        <div>⭐⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/mariadb-logo.webp" alt="mariaDB" />
                        </div>
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
                        <div>
                            <img src="./img/logo-competences/gitlab-logo.webp" alt="gitlab" />
                            <img src="./img/logo/github.png" alt="github" />
                        </div>
                        <div>Git/GitLab/GitHub</div>
                        <div>⭐⭐⭐</div>
                    </li>

                    <li>
                        <div>
                            <img src="./img/logo-competences/UML-logo.webp" alt="java" />
                        </div>
                        <div>Diagrammes UML</div>
                        <div>⭐⭐⭐</div>
                    </li>
                    <li>
                        <div>
                            <img src="./img/logo-competences/scrum-logo.webp" alt="java" />
                        </div>
                        <div>Gestion Agile/SCRUM</div>
                        <div>⭐⭐⭐</div>
                    </li>
                </ul>
            </div>

        );
    }
}

const CarteCompetences = (competence) => {

    return (
        <div className="carteCompetences">
            <div className="carte-en-tete">
                <h3>{competence.competence}</h3>
                <img className="fleche" src="img/fleche.webp" alt="flèche"/>
            </div>

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