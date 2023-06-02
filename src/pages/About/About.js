import React from "react";
import "./About.css";
import ProfilePhoto from "./ProfilePhoto.jpg"
import Screen from "../../components/displayScreen/Screen";
import Header from "../../components/Header/Header";
function About() {
  let funStatus = false;
const nameHandler = (event) => {
    if (funStatus === false) {
      funStatus = true;
      const name = event.target.innerText;
      let nameLenght = (name + "").length;
      const letters = "ABCDEFGHIJKLMNOPRSTUVZČČŠŽĐ";
      let interval = null;
      let iterations = 0;
      interval = setInterval(() => {
        event.target.innerText = name
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              
              return name[index];
            }
          

            return letters[Math.floor(Math.random() * 27)];
          })
          .join("");
        if (iterations >= nameLenght) {
          clearInterval(interval);
          funStatus = false;
        }

        iterations += 1 / 2;
      }, 50);
    } else return;
  };

  return (
    <>
      <div className="hero-section">
        <Header/>
        <div className="hero-section-content">
          <div className="text-wrapper">
            <h1 className="name" onMouseOver={nameHandler}>
              ALEN KALAČ
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              minus quas animi debitis voluptate dolorem similique nesciunt
              libero? Quam ea tenetur cumque eos, deleniti officia dicta qui
              facilis pariatur commodi sequi vitae blanditiis consequuntur rem
              eius reiciendis voluptates earum dignissimos inventore molestias
              aliquid itaque accusamus. Voluptatum, provident. Exercitationem,
              est voluptate.
            </p>
          </div>

          <div className="image-wrapper">
            <Screen bgImage={ProfilePhoto} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
