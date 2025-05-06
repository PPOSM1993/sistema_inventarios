import styled from "styled-components";
import { Btnsave, useAuthStore, Header, Title } from "../../index";
import { useState } from "react";

export function PlantillaBase() {
  const [state, setState] = useState(false);

  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1"></section>
      <section className="area2"></section>
      <section className="main"></section>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;
  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
  }
  .area1 {
    grid-area: area1;
    background-color: rgba(26, 148, 229, 0.14);
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    background-color: rgba(255, 81, 0, 0.14);
  }

  .main {
    grid-area: main;
    background-color: rgba(0, 170, 85, 0.14);
  }
`;
