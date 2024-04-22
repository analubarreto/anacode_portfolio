import styled from 'styled-components';

export const Main = styled.main<{ theme: any }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
`;