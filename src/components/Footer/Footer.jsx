"use client";

import "./footer.scss";


export default function Footer() {
  return (
    <div>
      <footer>
        <div className="opening-hours">
          <p>
            ⏰Nosso horário de funcionamento:⏰ De segunda a sexta das 09h as
            18h, sábado das 09h as 17h
          </p>
        </div>
        <div className="company">
            <figure>
              <img src="./icons/copyrigth.svg" alt="copyrigth" />
            </figure>
            WATERLIFE AQUARISMO 2023
          </div>
        <figure className="social-media">
          <a href="">
            <img src="./icons/instaWater.svg" alt=" instagram" />
          </a>
          <a href="">
            <img src="./icons/whatsWater.svg" alt=" whatsApp" />
          </a>
          <a href="">
            <img src="./icons/faceWater.svg" alt=" facebook" />
          </a>
        </figure>
      </footer>
    </div>
  );
}
