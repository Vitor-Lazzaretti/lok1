import styled from "styled-components";

export const HomeContainer = styled.section`
  height: calc(100vh - 80px);
  width: 100%;
  background-color: #30ae52;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeDiv = styled.div.attrs(props => ({
  flex: props.flex,
  background: props.background || 'none'
}))`
  height: inherit;
  flex: ${props => props.flex};
  background-color: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Scenery = styled.div`
  width: 90%;
  max-height: 80%;
  padding-top: 52.25%;
  background-color: #ccdce8;
  box-shadow: 0px 0px 15px 0px #222;
`;

export const ScroolItensArea = styled.div`
  width: 80%;
  height: 85%;
  background-color: #fff;
`;
