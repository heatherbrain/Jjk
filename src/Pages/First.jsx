import React, { useEffect, useRef } from "react";
import img1 from "../assets/mine1.jpg";
import img2 from "../assets/mine2.jpg";
import img3 from "../assets/mine3.jpg";
import audio from "../assets/sound.mp3"

import Favorites from "../components/Favorites";
import About from "../components/About";
import Contact from "../components/Contact";

function First() {
  const audioRef = useRef(null);
 
  useEffect(() => {
    audioRef.current.play();
  }, [])
  return (
    <>
      <section className="container1" id="home">
        <div className="navbar">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#favorite">Favorite</a>
          </p>
          <p>
            <a href="#author">About</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
          <p>
            <a href="#contact">User</a>
          </p>
        </div>
        <div className="wrap1">
          <div className="wrap2">
            <h1 className="title">Jujur Kasian</h1>
            <div className="ball"></div>
          </div>
          <img
            src="https://cdn.idntimes.com/content-images/duniaku/post/20230925/381410996-343512938029622-3588999135435515233-n-7c2c1708553caed6bd419998d8e74c4f.jpg"
            alt=""
            width={400}
            height={400}
            className="imgjujutsu"
          />
        </div>
      </section>
      <audio ref={audioRef} src={audio} />
      <section className="container2" id="favorite">
        <Favorites />
      </section>
      <section className="container3" id="author">
        <About img1={img1} img2={img2} img3={img3} />
      </section>
      <section className="container4" id="contact">
        <Contact />
      </section>
      <div className="cr">
        <p>&copy;2023 | Zia Athifa.</p>
      </div>
    </>
  );
}

export default First;
