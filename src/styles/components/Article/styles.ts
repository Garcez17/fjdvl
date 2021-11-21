import styled from 'styled-components';

export const Container = styled.article`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1280px;
  justify-content: center;

  gap: 2rem;
`;

export const Info = styled.div`
  width: 50%;

  h3 {
    font-size: 2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`;
