import { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DobraUm() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let valorMaskSize = "5000vw";
    if (window.innerWidth < 1000) {
      valorMaskSize = "6000vw";
    }

    gsap.to(".mask", {
      maskSize: valorMaskSize,
      maskPosition: " 53% center",
      scrollTrigger: {
        trigger: ".mask",
        scrub: 2,
        start: "top top",
        end: "bottom 50%",
      },
    });

    gsap.from(".txtEfeito", {
      opacity: 0,
      y: 20,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".mask",
        scrub: 1,
        start: "top top",
        end: "bottom 20%",
      },
    });
  }, []);

  return (
    <PageWrapper>
      <Mask className="mask">
        <Background /> {/* Fundo fixo */}
        <Content className="content">
          <h1 className="txtEfeito">Texto de exemplo</h1>
        </Content>
      </Mask>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative;
  min-height: 200vh; /* Aumenta a altura pra permitir scroll */
  width: 100vw;
  overflow-x: hidden;
`;

const Background = styled.div`
  background-image: url("/1.svg");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Só a viewport, mas fixo */
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Mask = styled.div`
  &.mask {
    mask-image: url("/F1.svg");
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 90vw;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Content = styled.div`
  height: 100%; /* Preenche a máscara */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    color: rgb(173, 9, 151);
    margin: 0px 50px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;
