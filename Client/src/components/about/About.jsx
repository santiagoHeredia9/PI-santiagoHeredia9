import style from "./About.module.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className={style.container}>
      <Link to="/home">
        <span className={style.back}>{`< Back to home`}</span>
      </Link>
      <h2 className={style.title}>About me</h2>
      <div className={style.aboutContainer}>
        <img className={style.imagen} src="/santi.jpg" alt="Santiago" />
        <div>
          <p className={style.p}>
            Hi! My name is Santiago, the creator of this application. <br></br>{" "}
            I am 20 years old, and these are my first steps in programming. I am
            very excited!
          </p>
        </div>
      </div>

      <hr />

      <div className={style.aboutContainer}>
        <div className={style.padel}>
          <p className={style.p}>
            One of my favorite things to do is sports. <br />
            Right now, I am practicing paddle, and I love it.
          </p>
        </div>

        <img className={style.imagen} src="/padel.jpg" alt="Santiago" />
      </div>

      <hr />

      <div className={style.aboutContainer}>
        <img className={style.imagen} src="/goro.jpg" alt="Santiago" />
        <div>
          <p className={style.p}>
            And he is my son, his name is Goro,
            <br /> like the character from Mortal Kombat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
