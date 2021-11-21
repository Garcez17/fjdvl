import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
  }

  > div {
    position: absolute;
    top: 40%;
    left: 45%;
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: #22a6b3;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    z-index: 99;
  }
`;
