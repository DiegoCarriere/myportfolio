
import {useState} from "react";
import CarteCompetences from "../components/CarteCompetences";
import Navigation from "../components/Navigation";


function competenceClicked(e) {
    let contenuCarte = e.currentTarget.getElementsByClassName("contenuCarteCompetences")[0];

    if(contenuCarte.style.display === "none" || contenuCarte.style.display === "") {
        contenuCarte.style.display = "block";
    } else {
        contenuCarte.style.display = "none";
    }
}

const Competences = () => {
    const [competences] = useState(["langages web","langages pour applications",
                                                    "base de données","autres compétences"]);


    return (
        <div className="page">
            <Navigation />
            <ul className="listeCompetences">
                {competences.map((competence, index) => (
                    <li key={index} onClick={competenceClicked}>
                        <CarteCompetences competence={competence}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Competences;


