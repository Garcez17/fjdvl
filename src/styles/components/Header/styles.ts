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

  gap: 2.5rem;

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

export const LogoContainer = styled.div`
  width: 9rem;
  height: 15rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background: var(--gray-800);

  &::after {
    content: '';
    border-style: solid;
    border-color: var(--gray-800) transparent;
    border-width: 1.5rem 4.5rem 0 4.5rem;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export const Logo = styled.div`
  width: 8.75rem;
  height: 15rem;
  position: relative;

  background: var(--gray-800);
  border-left: 1px solid var(--orange-500);
  border-right: 1px solid var(--orange-500);

  &::after {
    content: '';
    border-style: solid;
    border-color: var(--orange-500) transparent;
    border-width: 1.40rem 4.40rem 0 4.40rem;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
`;

export const FlagDiv = styled.div`
  &::after {
    content: '';
    border-style: solid;
    border-color: var(--gray-800) transparent;
    border-width: 1.35rem 4.30rem 0 4.30rem;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
`;
