import React from "react";
import NavBar from "../NavBar";
import intro from "../../../src/assets/medium-shot-women-talking-therapy.jpg"


const ProgramsIntro = () => {
    return (
        <div className="ProgramsIntro">
            <h3>Embrace. Empower. Educate.</h3>
            <div className="ProgramsIntroCard">
                <img src={intro}></img>
                <div>
                    <p>Join our Self-Care Sisterhood as we embark on a journey of collective healing and support!</p>
                    <p>We partner with licensed mental health professionals and non-profit youth organizations to deliver quality connections and positive experiences</p>
                </div>

            </div>

        </div>
    )
}

export default ProgramsIntro;