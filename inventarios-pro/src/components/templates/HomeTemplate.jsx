import styled from "styled-components";
import { BannerEmpresa, Btnsave, Header, Title, useEmpresaStore } from "../../index";
import { useState } from "react";



export function HomeTemplate() {
  const [state, setState] = useState(false);


  return (
    <Container>
      <header className="header">
        <Header stateConfig={{ state: state, setState: () => setState(!state) }} />
      </header>
      <section className="area1">
        <Title>Tu empresa</Title>
      </section>
     
      <section className="main">
        <BannerEmpresa />
      </section>
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
    background-color: rgba(248, 98, 11, 0);
  }
  .area1 {
    grid-area: area1;
    background-color: rgba(248, 98, 11, 0);
    display: flex;
    align-items: center;
    justify-content: end;
  }


  .main {
    grid-area: main;
    background-color: rgba(248, 98, 11, 0);
  }

`;

//background-color: rgba(0, 170, 85, 0.14);
//background-color: rgba(248, 98, 11, 0);
//background-color: rgba(248, 98, 11, 0.14);
