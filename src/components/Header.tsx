import { Container, Logo, Wrapper } from "../styles/components/Header/styles";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>
            <Logo />
          </li>
          <li>Contato</li>
          <li>Quem Somos</li>
        </ul>
      </Wrapper>
    </Container>
  )
}