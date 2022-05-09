import styled from "styled-components";

export const HomeContainer = styled.section`
  height: calc(100vh - 80px);
  width: 100%;
  background-color: #3e6669;
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
  position: relative;
  max-height: 80%;
  padding-top: 52.25%;
  background-color: #affefe;
  box-shadow: 0px 0px 15px 0px #222;

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const ScroolItensArea = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ItemArea = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;