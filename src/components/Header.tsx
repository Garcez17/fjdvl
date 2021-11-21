import { Container, LogoContainer, Logo, FlagDiv, Wrapper } from "../styles/components/Header/styles";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
        </ul>
        <LogoContainer>
          <Logo />
          <FlagDiv />
        </LogoContainer>
        <ul>
          <li>Contato</li>
          <li>Contato</li>
        </ul>
      </Wrapper>
    </Container>
  )
}