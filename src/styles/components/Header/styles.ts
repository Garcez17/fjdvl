import styled from 'styled-components';

export const Container = styled.header`
  background: var(--gray-800);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.nav`
  width: 80%;
  max-width: 1280px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    gap: 2.5rem;

    li {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;

export const Logo = styled.div`
  width: 9rem;
  height: 100%;

  background: var(--background);
`;