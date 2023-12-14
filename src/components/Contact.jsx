import React from 'react'
import {
    FaInstagram,
    FaGithub,
    FaSpotify,
  } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="wrap5">
          <p>Wanna know me more?</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaInstagram size={30} />
            <p>@vwxyzzia_</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaGithub size={30} />
            <p>heatherbrain</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaSpotify size={30} />
            <p>fitsnacc</p>
          </div>
        </div>
  )
}
