import styled, { css } from 'styled-components';

export const Container = styled.div`
  
`;

export const SliderContainer = styled.div`
  width: 50%;
  margin: 10rem auto;
`;

type WrapperProps = {
  active: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
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
  background: transparent;
  top: 50%;
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

    transition: color 300ms;
  }
    
  :hover svg {
    color: #68edff;
  }
`;
