import React from "react";
import styled from "styled-components";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="child child-1">
          <a
            href="https://x.com/Mary_Albuquer_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button btn-1" aria-label="Twitter">
              <FaXTwitter color="#000000" />
            </button>
          </a>
        </div>
        <div className="child child-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <button className="button btn-2" aria-label="Instagram">
              <IoLogoInstagram color="#ff00ff" />
            </button>
          </a>
        </div>
        <div className="child child-3">
          <a
            href="https://t.me/+KbkVz78M_5liNjFh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button btn-3" aria-label="Telegram">
              <FaTelegramPlane color="#1e90ff" />
            </button>
          </a>
        </div>
        <div className="child child-4">
          <a
            href="https://privacy.com.br/profile/MaryAlbuquerqueFree"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button btn-4" aria-label="18+">
              <TbRating18Plus color="#ff0000" />
            </button>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .child {
    width: clamp(45px, 12vw, 50px);
    height: clamp(45px, 12vw, 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 0.3s cubic-bezier(0.68, 0.85, 0.265, 1.85);
    border-radius: 5px;
    box-shadow: inset 1px 1px 2px #fff, 0 0 5px rgba(151, 1, 1, 0.7);
    will-change: transform; /* Otimização para animações */

    /* Sombra adicional para melhor contraste em telas pequenas */
    @media (max-width: 768px) {
      box-shadow: inset 1px 1px 2px #fff, 0 0 8px rgba(151, 1, 1, 0.8),
        0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }

  /* Otimizar transformações para dispositivos de toque */
  @media (hover: hover) {
    .child:hover {
      background-color: white;
      background-position: -100px 100px, -100px 100px;
      transform: perspective(180px) rotateX(60deg) translateY(2px);
    }

    .child-1:hover {
      box-shadow: 0px 10px 10px rgba(30, 144, 255, 0.7);
    }
    .child-2:hover {
      box-shadow: 0px 10px 10px rgba(255, 0, 255, 0.7);
    }
    .child-3:hover {
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    }
    .child-4:hover {
      box-shadow: 0px 10px 10px rgba(66, 103, 178, 0.7);
    }

    .child:hover > .button {
      transform: translate3d(0px, 20px, 30px) perspective(80px) rotateX(-60deg)
        translateY(2px) translateZ(10px);
    }
  }

  /* Versão simplificada para dispositivos de toque */
  @media (hover: none) {
    .child:active {
      background-color: white;
      transform: scale(0.95);
    }

    .child-1:active {
      box-shadow: 0px 5px 5px rgba(30, 144, 255, 0.7),
        0 2px 10px rgba(0, 0, 0, 0.4);
    }
    .child-2:active {
      box-shadow: 0px 5px 5px rgba(255, 0, 255, 0.7),
        0 2px 10px rgba(0, 0, 0, 0.4);
    }
    .child-3:active {
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.4);
    }
    .child-4:active {
      box-shadow: 0px 5px 5px rgba(66, 103, 178, 0.7),
        0 2px 10px rgba(0, 0, 0, 0.4);
    }
  }

  .button {
    cursor: pointer;
    text-align: center;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: clamp(18px, 5vw, 20px);
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.68, -0.85, 0.265, 1.55);
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));

    @media (max-width: 768px) {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4));
    }
  }
`;

export default Button;
