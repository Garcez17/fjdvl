import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 6rem 0;
  background: var(--gray-800);
  display: flex;
  justify-content: center;
  height: 27.5rem;
  position: relative;
  z-index: 20;

  &::before {
    content: '';
    border-style: solid;
    border-color: var(--background) transparent;
    border-width: 100px 712px 0 712px;
    top: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    content: '';
    border-style: solid;
    border-color: var(--gray-800) transparent;
    border-width: 100px 712px 0 712px;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  position: absolute;

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }
`;

type ContentProps = {
  active: boolean;
}

export const Content = styled.div<ContentProps>`
  margin-top: ${props => props.active ? '125px' : '40px'};
  width: 350px;
  height: 300px;
  display: flex;

  transform: ${props => props.active ? 'scale(1.1)' : 'scale(0.2)'};
  transition: 300ms;
  opacity: ${props => props.active ? '1' : '0.5'};
`;

type ArrowProps = {
  position: 'next' | 'prev';
}

export const Arrow = styled.button<ArrowProps>`
  border: 0;
  width: 3rem;
  height: 3rem;
  background: transparent;
  top: 45%;
  position: absolute;
  z-index: 10;

  ${props => props.position === 'next' ? 
    css`
      right: 0%;
    ` : css`
      left: 0%;
    `}

  svg {
    width: 3rem;
    height: 3rem;
    color: var(--orange-500);

    transition: color 300ms;
  }
    
  :hover svg {
    color: #68edff;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 115%;
  left: 40%;

  width: 16rem;
  height: 4rem;
  border: 0;
  border-radius: 1.25rem;

  background: var(--orange-500);
  font-size: 2rem;
  color: var(--white);
  font-family: 'MedievalSharp';

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;
