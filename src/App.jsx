import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
  background-size: cover;
  background-position: center;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
`;

const ScrollArea = styled.div`
  height: 300vh;
`;

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    gsap.to(".container", {
      maskSize: "2000vw",
      scrollTrigger: {
        trigger: ".scroll-area",
        pin: true,
        start: "top top",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Background />
      <Container className="container" ref={containerRef} />
      <ScrollArea className="scroll-area" />
    </>
  );
}

export default App;
