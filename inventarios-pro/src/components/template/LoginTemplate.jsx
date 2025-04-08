import styled from "styled-components";
import { Btnsave } from "../../index";

export function LoginTemplate() {
  return (
    <Container>
      <Btnsave titulo="Crear Cuenta" bgcolor="#fc6b32" />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
