import styled from "styled-components";

export function HomeTemplate() {
  return (
    <Container>
      <h1>Pollo Malulo</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;