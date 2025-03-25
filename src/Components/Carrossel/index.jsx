import Eventos from "../CardFestas/indes";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export default function Festas() {
  return (
    <FestasContainer>
      <NavigationBar>
        <BackButton to="/home">
          <IoArrowBack /> Voltar
        </BackButton>
      </NavigationBar>
      <Eventos />
    </FestasContainer>
  );
}

const FestasContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const NavigationBar = styled.nav`
  display: flex;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(5px);

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    color: #a278ff;
    transform: translateX(-3px);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;