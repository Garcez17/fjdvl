import Image from "next/image";
import { Container } from "../styles/components/ModelLoading/styles";

export function ModelLoading() {
  return (
    <Container>
      <div></div>
      <img src="/astronaut.png" alt="astronaut" />
    </Container>
  )
}