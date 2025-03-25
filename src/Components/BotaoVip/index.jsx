import React from "react";
import styled from "styled-components";

const ButtonVip = () => {
  return (
    <StyledWrapper>
      <a
        href="https://privacy.com.br/profile/mary_albuquerque"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="Btn" aria-label="Botão VIP">
          <svg viewBox="0 0 576 512" height="1em" className="logoIcon">
            <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
          </svg>
          SEJA VIP
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: clamp(220px, 80vw, 240px);
    height: clamp(36px, 10vw, 40px);
    border: none;
    border-radius: 40px;
    background: linear-gradient(
      to right,
      #bf953f,
      #fcf6ba,
      #b38728,
      #fbf5b7,
      #aa771c
    );
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: clamp(0.7em, 2vw, 0.8em);
    color: rgb(121, 103, 3);
    font-weight: 600;
    cursor: pointer;
    position: relative;
    z-index: 2;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.144);
    background-size: 200% 200%;
    will-change: transform, background-position;

    /* Sombra mais forte para telas pequenas */
    @media (max-width: 768px) {
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3),
        0 0 10px rgba(255, 215, 0, 0.4);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    /* Versão para desktop com animação mais elaborada */
    @media (hover: hover) {
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(0.95);
        animation: gradient 5s ease infinite;
        background-position: right;
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }

    /* Versão simplificada para dispositivos móveis */
    @media (hover: none) {
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:active {
        transform: scale(0.9);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .logoIcon {
    height: clamp(0.9em, 2.5vw, 1em);
    width: auto;
  }

  .logoIcon path {
    fill: rgb(121, 103, 3);
  }
`;

export default ButtonVip;
