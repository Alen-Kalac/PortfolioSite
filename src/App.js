import ProfilePhoto from "./images/ProfilePhoto.jpg";
import "./App.css";

function App() {
  // const nameLenght = name.lenght
  const nameHandler = (event) => {
    let name = event.target.innerText;
    let nameLenght = (name + "").length;
    const letters = "ABCDEFGHIJKLMNOPRSTUVZČČŠŽĐ";
    let interval = null;
    let iterations = 0;
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
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
    }

    iterations += 1/2;
  }, 50)
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-section-content">
          <div className="text-wrapper">
            <h1 className="name" onMouseOver={nameHandler}>
              ALEN KALAČ
            </h1>
            <p 
            className="description">
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
            <img src={ProfilePhoto} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
