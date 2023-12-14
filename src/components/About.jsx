import React, { useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function About({ img1, img2, img3 }) {
  let imageContainerRef = useRef(null);
  const slideimages = [img1, img2, img3];

  const prev = () => (imageContainerRef.current.scrollLeft -= 400);
  const next = () => (imageContainerRef.current.scrollLeft += 400);

  return (
    <div className="wrap4">
      <div className="slide-container">
        <div className="prev" onClick={prev}>
          <FaArrowCircleLeft size={30} />
        </div>
        <div className="slide-panel" ref={imageContainerRef}>
          {slideimages.map((image) => {
            return <img src={image} />;
          })}
        </div>
        <div className="next" onClick={next}>
          {" "}
          <FaArrowCircleRight size={30} />
        </div>
        <div className="textaboutname">
          <h1 className="aboutname">About Author</h1>
          <p>
            Remaja labil yang suka <i>overthink</i> terhadap hal apapun, bisa
            menggambar tapi ngga bisa mewaranai. Akhir akhir ini ngantuk berat
            dan sering ketiduran, gila aja tidur siang bisa 5 jam? ntah pertanda
            apa tapi bisa ngga ya pipi yang sudah seperti bakpao ini dijual?
            infokan. <br />
            Punya muka yang galak (katanya) padahal aslinya pemalu, tapi orang
            orang bilang kalau aku malu maluin.. masa sih? <i>introvert</i> gini
            dibilang malu-maluin.
            <i> #1 Moodswings everyday</i>, emosian orangnya kalau lagi{" "}
            <i>badmood</i>..maklum, anak ayah..senggol bacok. ngga deh boong,
            cengeng gini mana berani bacok orang..takut darah hehe.. <br />
            Suaranya gede, segede toa, mungkin kalau butuh jasa manggil orang
            pekak bisa <i>calling calling</i> lah ya~
          </p>
        </div>
      </div>
    </div>
  );
}
