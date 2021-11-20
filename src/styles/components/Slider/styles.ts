import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 8rem 0;
  background: var(--gray-800);
  display: flex;
  justify-content: center;
  height: 20rem;
`;

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1280px;

  .slick-slider,
  .slick-list,
  .slick-track {
    height: 100%;
  }

  .slick-slide {
    > div {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      div {
        height: 100%;
        display: flex;
      }
    }
  }
`;

type ContentProps = {
  active: boolean;
}

export const Content = styled.div<ContentProps>`
  width: 350px;
  height: 250px;
  display: flex;
  position: relative;

  > img {
    width: 20rem;
    margin: 0 auto;
  }

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
    color: #666;
    width: 3rem;
    height: 3rem;

    transition: color 300ms;
  }
    
  :hover svg {
    color: #68edff;
  }
`;